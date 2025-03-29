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

import { Product } from '~orm/entities';

import { SkipAuth } from '~modules/auth/decorators';

import { ZodApiQuery } from '~common/decorators';
import { IPaginationResult } from '~common/interfaces';

import {
    CreateProductDto,
    GetAllProductsInputDto,
    GetAllProductsInputDtoSchema,
    GetAllProductsOutputDto,
    GetAllProductsOutputDtoSchema,
    UpdateProductDto,
} from './common/dto';
import { ProductsService } from './products.service';

@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @SkipAuth()
    @Get()
    @ApiOperation({ operationId: 'getProducts' })
    @ZodApiQuery(GetAllProductsInputDtoSchema)
    @ZodSerializerDto(GetAllProductsOutputDtoSchema)
    @ApiOkResponse({ type: GetAllProductsOutputDto })
    public async getAll(
        @Query() query: GetAllProductsInputDto,
    ): Promise<IPaginationResult<Product>> {
        return this.productsService.getAll(query);
    }

    @SkipAuth()
    @Post()
    @ApiOperation({ operationId: 'createProduct' })
    public async createOne(@Body() dto: CreateProductDto): Promise<void> {
        return this.productsService.createOne(dto);
    }

    @SkipAuth()
    @Patch(':id')
    @ApiOperation({ operationId: 'updateProduct' })
    public async updateOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateProductDto,
    ): Promise<void> {
        return this.productsService.updateOne(id, dto);
    }

    @SkipAuth()
    @Delete(':id')
    @ApiOperation({ operationId: 'deleteProduct' })
    public async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productsService.deleteOne(id);
    }
}
