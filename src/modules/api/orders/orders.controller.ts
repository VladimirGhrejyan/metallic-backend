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
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
} from '@nestjs/swagger';
import { ZodSerializerDto } from 'nestjs-zod';

import { Order } from '~orm/entities';

import { ZodApiQuery } from '~common/decorators';
import { IPaginationResult } from '~common/interfaces';

import { ORDERS_METADATA } from './common/constants';
import {
    CreateOrderDto,
    GetAllOrdersInputDto,
    GetAllOrdersInputDtoSchema,
    GetAllOrdersOutputDto,
    GetAllOrdersOutputDtoSchema,
    GetOneOrderOutputDto,
    GetOneOrderOutputDtoSchema,
    UpdateOrderDto,
} from './common/dto';
import { OrdersService } from './orders.service';

const {
    PREFIX,
    TAGS,
    ROUTES: { GET_ALL, GET_ONE, CREATE_ONE, UPDATE_ONE, DELETE_ONE },
} = ORDERS_METADATA;

@ApiBearerAuth()
@ApiTags(...TAGS)
@Controller(PREFIX)
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get(GET_ALL.PATH)
    @ApiOperation({ operationId: GET_ALL.OPERATION_ID })
    @ZodApiQuery(GetAllOrdersInputDtoSchema)
    @ZodSerializerDto(GetAllOrdersOutputDtoSchema)
    @ApiOkResponse({ type: GetAllOrdersOutputDto })
    public async getAll(@Query() query: GetAllOrdersInputDto): Promise<IPaginationResult<Order>> {
        return this.ordersService.getAll(query);
    }

    @Get(GET_ONE.PATH)
    @ApiOperation({ operationId: GET_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneOrderOutputDtoSchema)
    @ApiOkResponse({ type: GetOneOrderOutputDto })
    public async getOneById(@Param(GET_ONE.PARAMS.ID, ParseIntPipe) id: number) {
        return this.ordersService.getOneById(id);
    }

    @Post(CREATE_ONE.PATH)
    @ApiOperation({ operationId: CREATE_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneOrderOutputDtoSchema)
    @ApiCreatedResponse({ type: GetOneOrderOutputDto })
    public async createOne(@Body() dto: CreateOrderDto) {
        return this.ordersService.createOne(dto);
    }

    @Patch(UPDATE_ONE.PATH)
    @ApiOperation({ operationId: UPDATE_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneOrderOutputDtoSchema)
    @ApiOkResponse({ type: GetOneOrderOutputDto })
    public async updateOne(
        @Param(UPDATE_ONE.PARAMS.ID, ParseIntPipe) id: number,
        @Body() dto: UpdateOrderDto,
    ) {
        return this.ordersService.updateOne(id, dto);
    }

    @Delete(DELETE_ONE.PATH)
    @ApiOperation({ operationId: DELETE_ONE.OPERATION_ID })
    public async deleteOne(@Param(DELETE_ONE.PARAMS.ID, ParseIntPipe) id: number): Promise<void> {
        return this.ordersService.deleteOne(id);
    }
}
