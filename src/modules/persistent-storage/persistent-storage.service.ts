import { ObjectCannedACL, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CustomConfigService } from '~modules/custom-config';

@Injectable()
export class PersistentStorageService {
    private readonly s3_client: S3Client;

    constructor(private readonly configService: CustomConfigService) {
        const s3_config = this.configService.get('storage');

        this.s3_client = new S3Client({
            credentials: {
                secretAccessKey: s3_config.secretAccessKey,
                accessKeyId: s3_config.accessKeyId,
            },
            endpoint: s3_config.endpoint,
            region: s3_config.region,
            forcePathStyle: true,
        });
    }

    public async uploadFile(
        fileBuffer: Buffer,
        key: string,
        acl: ObjectCannedACL = 'public-read',
    ): Promise<void> {
        const command = new PutObjectCommand({
            Bucket: this.configService.get('storage').bucketName,
            Key: key,
            Body: fileBuffer,
            ACL: acl,
        });

        try {
            await this.s3_client.send(command);

            //         Return the public URL of the uploaded file
            //         return `https://${bucket}.${this.configService.get('storage').endpoint}/key`;
        } catch (error) {
            throw new InternalServerErrorException(this.buildErrorMessage(error));
        }
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
