import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product, ProductCategory, Upload } from '~orm/entities';

import { ProductCategoriesModule } from '~modules/api/product-categories';
import { UploadsModule } from '~modules/infra/uploads';
import { UtilsModule } from '~modules/shared/utils';
import { XlsxModule } from '~modules/shared/xlsx';

import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';
import { ProductsBulkUpdateService } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductCategory, Product, Upload]),
        ProductCategoriesModule,
        UtilsModule,
        UploadsModule,
        XlsxModule,
    ],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository, ProductsBulkUpdateService],
})
export class ProductsModule {}
