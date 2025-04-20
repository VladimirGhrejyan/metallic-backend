import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { TGlobalConfig } from '~config/common/types';

import { CustomConfigService } from '~modules/core/custom-config';

import { TUploadFileOptions } from './common/types';

@Injectable()
export class PersistentStorageService {
    private readonly s3_client: S3Client;

    private readonly s3_config: TGlobalConfig['storage'];

    constructor(private readonly configService: CustomConfigService) {
        this.s3_config = this.configService.get('storage');

        this.s3_client = new S3Client({
            credentials: {
                secretAccessKey: this.s3_config.secretAccessKey,
                accessKeyId: this.s3_config.accessKeyId,
            },
            endpoint: this.s3_config.endpoint,
            region: this.s3_config.region,
            forcePathStyle: true,
        });
    }

    public async uploadFile(fileBuffer: Buffer, options: TUploadFileOptions): Promise<string> {
        const { key, contentType, acl = 'public-read', contentDisposition = 'inline' } = options;

        const command = new PutObjectCommand({
            Bucket: this.s3_config.bucketName,
            Key: key,
            Body: fileBuffer,
            ACL: acl,
            ContentDisposition: contentDisposition,
            ...(!!contentType && { ContentType: contentType }),
        });

        try {
            await this.s3_client.send(command);

            return this.buildAccessUrl(key);
        } catch (error) {
            throw new InternalServerErrorException(this.buildErrorMessage(error));
        }
    }

    public async deleteFile(key: string): Promise<void> {
        const command = new DeleteObjectCommand({
            Bucket: this.s3_config.bucketName,
            Key: key,
        });

        try {
            await this.s3_client.send(command);
        } catch (error) {
            throw new InternalServerErrorException(this.buildErrorMessage(error));
        }
    }

    private buildAccessUrl(key: string): string {
        const path = key.startsWith('/') ? key : '/' + key;

        return this.s3_config.endpoint + '/' + this.s3_config.bucketName + path;
    }

    private buildErrorMessage(error: unknown): string {
        if (
            typeof error === 'object' &&
            error !== null &&
            'message' in error &&
            typeof error.message === 'string'
        ) {
            return error.message;
        }

        return 'Internal Server Error';
    }
}
