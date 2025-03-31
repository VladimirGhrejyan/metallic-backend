import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Upload } from '~orm/entities';

@Injectable()
export class UploadsRepository {
    constructor(@InjectRepository(Upload) private readonly uploadsRepository: Repository<Upload>) {}
}
