import { BadRequestException, Injectable } from '@nestjs/common';

import { Upload } from '~orm/entities';

import { CustomConfigService } from '~modules/core/custom-config';
import { PersistentStorageService } from '~modules/infra/persistent-storage';

import { TUploadImageOptionsType } from './common/types';
import { UploadsRepository } from './uploads.repository';

@Injectable()
export class UploadsService {
    constructor(
        private readonly uploadsRepository: UploadsRepository,

        private readonly persistentStorageService: PersistentStorageService,

        private readonly configService: CustomConfigService,
    ) {}

    private VALID_IMAGE_MIME_TYPES = ['image/png', 'image/jpeg'];

    public async uploadImage(
        image: Express.Multer.File,
        options?: TUploadImageOptionsType,
    ): Promise<Upload> {
        this.validateImageMimeType(image.mimetype);

        const { name } = options ?? {};

        const imageName = this.buildUploadName(image.originalname, name);

        const enhancedPath = this.buildUploadPath(imageName);

        const url = await this.persistentStorageService.uploadFile(image.buffer, {
            key: enhancedPath,
            contentType: image.mimetype,
        });

        const payload: Omit<Upload, 'id'> = {
            url,
            path: enhancedPath,
            mimeType: image.mimetype,
            name: imageName,
        };

        return this.uploadsRepository.createOne(payload);
    }

    public async deleteOne(id: Upload['id']): Promise<void> {
        const upload = await this.uploadsRepository.getOneById(id);

        if (!upload) {
            return;
        }

        await this.uploadsRepository.deleteOne(id);

        await this.persistentStorageService.deleteFile(upload.path);
    }

    private extractExtensionFromNameOrThrowException(fileName: string): string {
        const extension = fileName.split('.').pop();

        if (!extension?.length) {
            throw new BadRequestException('Invalid file type');
        }

        return extension;
    }

    private buildUploadName(originalName: string, overwrittenName?: string): string {
        if (!overwrittenName) {
            return originalName;
        }

        const extension = this.extractExtensionFromNameOrThrowException(originalName);

        return overwrittenName + '.' + extension;
    }

    private buildUploadPath(name: string): string {
        const nodeEnv = this.configService.get('app').nodeEnv;

        const timestamp = new Date().getTime();

        return nodeEnv + '/' + timestamp + '_' + name;
    }

    private validateImageMimeType(mimeType?: string): void {
        if (!mimeType) {
            throw new BadRequestException('Invalid file type');
        }

        if (!this.VALID_IMAGE_MIME_TYPES.includes(mimeType)) {
            throw new BadRequestException('Unsupported image type');
        }
    }
}
