import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Client, ClientPhone } from '~orm/entities';

import { UtilsModule } from '~modules/shared/utils';

import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
    imports: [TypeOrmModule.forFeature([Client, ClientPhone]), UtilsModule],
    controllers: [ClientsController],
    providers: [ClientsService, ClientsRepository],
    exports: [ClientsRepository],
})
export class ClientsModule {}
