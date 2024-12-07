import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateProductDto, UpdateProductDto } from './common/dto';
import { ProductsService } from './products.service';

@ApiBearerAuth()
@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @ApiOperation({ operationId: 'createProduct' })
    public async createOne(@Body() dto: CreateProductDto): Promise<void> {
        return this.productsService.createOne(dto);
    }

    @Patch(':id')
    @ApiOperation({ operationId: 'updateProduct' })
    public async updateOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateProductDto,
    ): Promise<void> {
        return this.productsService.updateOne(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ operationId: 'deleteProduct' })
    public async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.productsService.deleteOne(id);
    }
}
