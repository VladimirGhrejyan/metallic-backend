import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product, ProductCategory, Upload } from '~orm/entities';

import { ProductCategoriesModule } from '~modules/api/product-categories';
import { UploadsModule } from '~modules/uploads';
import { UtilsModule } from '~modules/utils';

import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductCategory, Product, Upload]),
        ProductCategoriesModule,
        UtilsModule,
        UploadsModule,
    ],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
