import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Upload } from '~orm/entities';

import { UploadsRepository } from './uploads.repository';
import { UploadsService } from './uploads.service';

@Module({
    imports: [TypeOrmModule.forFeature([Upload])],
    providers: [UploadsService, UploadsRepository],
    exports: [UploadsService],
})
export class UploadsModule {}
