import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ZodSerializerDto } from 'nestjs-zod';

import { ZodApiQuery } from '~common/decorators';

import {
    CreateProductCategoryDto,
    GetAllCategoriesDtoSchema,
    GetAllCategoriesInputDto,
    GetAllCategoriesInputDtoSchema,
    GetAllCategoriesOutputDto,
    UpdateProductCategoryDto,
} from './common/dto';
import { TProductCategoriesResponse } from './common/types';
import { ProductCategoriesService } from './product-categories.service';

@ApiBearerAuth()
@ApiTags('product-categories')
@Controller('product-categories')
export class ProductCategoriesController {
    constructor(private readonly productCategoriesService: ProductCategoriesService) {}

    @Get('all')
    @ApiOperation({ operationId: 'getProductCategories' })
    @ZodApiQuery(GetAllCategoriesInputDtoSchema)
    @ZodSerializerDto(GetAllCategoriesDtoSchema)
    @ApiOkResponse({ type: GetAllCategoriesOutputDto })
    public async getAll(
        @Query() query: GetAllCategoriesInputDto,
    ): Promise<TProductCategoriesResponse> {
        return this.productCategoriesService.getAll(query);
    }

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
}
