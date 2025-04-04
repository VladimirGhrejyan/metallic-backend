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

import { ZodApiQuery } from '~common/decorators';
import { IPaginationResult } from '~common/interfaces';

import { PRODUCTS_METADATA } from './common/constants';
import {
    CreateProductDto,
    GetAllProductsInputDto,
    GetAllProductsInputDtoSchema,
    GetAllProductsOutputDto,
    GetAllProductsOutputDtoSchema,
    GetOneProductOutputDto,
    GetOneProductOutputDtoSchema,
    UpdateProductDto,
} from './common/dto';
import { ProductsService } from './products.service';

const {
    PREFIX,
    TAGS,
    ROUTES: { GET_ALL, GET_ONE, CREATE_ONE, UPDATE_ONE, DELETE_ONE },
} = PRODUCTS_METADATA;

@ApiBearerAuth()
@ApiTags(...TAGS)
@Controller(PREFIX)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get(GET_ALL.PATH)
    @ApiOperation({ operationId: GET_ALL.OPERATION_ID })
    @ZodApiQuery(GetAllProductsInputDtoSchema)
    @ZodSerializerDto(GetAllProductsOutputDtoSchema)
    @ApiOkResponse({ type: GetAllProductsOutputDto })
    public async getAll(
        @Query() query: GetAllProductsInputDto,
    ): Promise<IPaginationResult<Product>> {
        return this.productsService.getAll(query);
    }

    @Get(GET_ONE.PATH)
    @ApiOperation({ operationId: GET_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneProductOutputDtoSchema)
    @ApiOkResponse({ type: GetOneProductOutputDto })
    public async getOneById(@Param(GET_ONE.PARAMS.ID, ParseIntPipe) id: number): Promise<Product> {
        return this.productsService.getOneById(id);
    }

    @Post(CREATE_ONE.PATH)
    @ApiOperation({ operationId: CREATE_ONE.OPERATION_ID })
    public async createOne(@Body() dto: CreateProductDto): Promise<void> {
        return this.productsService.createOne(dto);
    }

    @Patch(UPDATE_ONE.PATH)
    @ApiOperation({ operationId: UPDATE_ONE.OPERATION_ID })
    public async updateOne(
        @Param(UPDATE_ONE.PARAMS.ID, ParseIntPipe) id: number,
        @Body() dto: UpdateProductDto,
    ): Promise<void> {
        return this.productsService.updateOne(id, dto);
    }

    @Delete(DELETE_ONE.PATH)
    @ApiOperation({ operationId: DELETE_ONE.OPERATION_ID })
    public async deleteOne(@Param(DELETE_ONE.PARAMS.ID, ParseIntPipe) id: number): Promise<void> {
        return this.productsService.deleteOne(id);
    }
}
