import { Injectable } from '@nestjs/common';

import { UploadsRepository } from './uploads.repository';

@Injectable()
export class UploadsService {
    constructor(private readonly uploadsRepository: UploadsRepository) {}
}
