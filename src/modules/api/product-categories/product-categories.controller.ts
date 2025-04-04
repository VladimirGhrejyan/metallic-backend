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

import { ProductCategory } from '~orm/entities';

import { ZodApiQuery } from '~common/decorators';

import { PRODUCT_CATEGORIES_METADATA } from './common/constants';
import {
    CreateProductCategoryDto,
    GetAllCategoriesDtoSchema,
    GetAllCategoriesInputDto,
    GetAllCategoriesInputDtoSchema,
    GetAllCategoriesOutputDto,
    GetOneCategoryDto,
    GetOneCategoryDtoSchema,
    UpdateProductCategoryDto,
} from './common/dto';
import { TProductCategoriesResponse } from './common/types';
import { ProductCategoriesService } from './product-categories.service';

const {
    PREFIX,
    TAGS,
    ROUTES: { GET_ALL, GET_ONE, CREATE_ONE, UPDATE_ONE, DELETE_ONE },
} = PRODUCT_CATEGORIES_METADATA;

@ApiBearerAuth()
@ApiTags(...TAGS)
@Controller(PREFIX)
export class ProductCategoriesController {
    constructor(private readonly productCategoriesService: ProductCategoriesService) {}

    @Get(GET_ALL.PATH)
    @ApiOperation({ operationId: GET_ALL.OPERATION_ID })
    @ZodApiQuery(GetAllCategoriesInputDtoSchema)
    @ZodSerializerDto(GetAllCategoriesDtoSchema)
    @ApiOkResponse({ type: GetAllCategoriesOutputDto })
    public async getAll(
        @Query() query: GetAllCategoriesInputDto,
    ): Promise<TProductCategoriesResponse> {
        return this.productCategoriesService.getAll(query);
    }

    @Get(GET_ONE.PATH)
    @ApiOperation({ operationId: GET_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneCategoryDtoSchema)
    @ApiOkResponse({ type: GetOneCategoryDto })
    public async getOneById(
        @Param(GET_ONE.PARAMS.ID, ParseIntPipe) id: number,
    ): Promise<ProductCategory> {
        return this.productCategoriesService.getOneById(id);
    }

    @Post(CREATE_ONE.PATH)
    @ApiOperation({ operationId: CREATE_ONE.OPERATION_ID })
    public async createOne(@Body() dto: CreateProductCategoryDto): Promise<void> {
        return this.productCategoriesService.createOne(dto);
    }

    @Patch(UPDATE_ONE.PATH)
    @ApiOperation({ operationId: UPDATE_ONE.OPERATION_ID })
    public async updateOne(
        @Param(UPDATE_ONE.PARAMS.ID, ParseIntPipe) id: number,
        @Body() dto: UpdateProductCategoryDto,
    ): Promise<void> {
        return this.productCategoriesService.updateOne(id, dto);
    }

    @Delete(DELETE_ONE.PATH)
    @ApiOperation({ operationId: DELETE_ONE.OPERATION_ID })
    public async deleteOne(@Param(DELETE_ONE.PARAMS.ID, ParseIntPipe) id: number): Promise<void> {
        return this.productCategoriesService.deleteOne(id);
    }
}
