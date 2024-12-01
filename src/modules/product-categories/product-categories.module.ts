import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product, ProductCategory } from '~orm/entities';

import { ProductCategoriesController } from './product-categories.controller';
import { ProductCategoriesRepository } from './product-categories.repository';
import { ProductCategoriesService } from './product-categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductCategory, Product])],
    controllers: [ProductCategoriesController],
    providers: [ProductCategoriesService, ProductCategoriesRepository],
})
export class ProductCategoriesModule {}
