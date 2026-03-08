import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Client, Order, OrderItem, Product } from '~orm/entities';

import { ClientsModule } from '~modules/api/clients';
import { UtilsModule } from '~modules/shared/utils';

import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { OrdersService } from './orders.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Order, OrderItem, Product, Client]),
        ClientsModule,
        UtilsModule,
    ],
    controllers: [OrdersController],
    providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
