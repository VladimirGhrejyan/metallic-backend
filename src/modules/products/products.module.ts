import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product, ProductCategory } from '~orm/entities';

import { ProductCategoriesModule } from '~modules/product-categories';

import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductCategory, Product]), ProductCategoriesModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
