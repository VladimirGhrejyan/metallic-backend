import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZodSerializerDto } from 'nestjs-zod';

import {
    CreateProductCategoryDto,
    GetAllCategoriesDto,
    GetAllCategoriesDtoSchema,
    UpdateProductCategoryDto,
} from './common/dto';
import { TProductCategoriesResponse } from './common/types';
import { ProductCategoriesService } from './product-categories.service';

@ApiBearerAuth()
@ApiTags('product-categories')
@Controller('product-categories')
export class ProductCategoriesController {
    constructor(private readonly productCategoriesService: ProductCategoriesService) {}

    @Post()
    @ApiOperation({ operationId: 'createProductCategory' })
    public async createOne(@Body() dto: CreateProductCategoryDto): Promise<void> {
        return this.productCategoriesService.createOne(dto);
    }

    @Patch(':id')
    @ApiOperation({ operationId: 'updateProductCategory' })
    public async updateOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateProductCategoryDto,
    ): Promise<void> {
        return this.productCategoriesService.updateOne(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ operationId: 'deleteProductCategory' })
    public async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productCategoriesService.deleteOne(id);
    }

    @Get('all')
    @ApiOperation({ operationId: 'getProductCategories' })
    @ZodSerializerDto(GetAllCategoriesDtoSchema)
    @ApiOkResponse({ type: GetAllCategoriesDto })
    public async getAll(): Promise<TProductCategoriesResponse> {
        return this.productCategoriesService.getAll();
    }
}
