import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Upload } from '~orm/entities';

@Injectable()
export class UploadsRepository {
    constructor(@InjectRepository(Upload) private readonly uploadsRepository: Repository<Upload>) {}

    public async getOneById(id: Upload['id']) {
        return this.uploadsRepository.findOneBy({ id });
    }

    public async createOne(payload: Omit<Upload, 'id'>): Promise<Upload> {
        return this.uploadsRepository.save(payload);
    }

    public async deleteOne(id: Upload['id']): Promise<void> {
        await this.uploadsRepository.delete(id);
    }
}
