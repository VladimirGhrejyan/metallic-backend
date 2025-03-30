import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

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
}
