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

import { Client } from '~orm/entities';

import { ZodApiQuery } from '~common/decorators';
import { IPaginationResult } from '~common/interfaces';

import { ClientsService } from './clients.service';
import { CLIENTS_METADATA } from './common/constants';
import {
    CreateClientDto,
    CreateClientPhoneDto,
    GetAllClientsInputDto,
    GetAllClientsInputDtoSchema,
    GetAllClientsOutputDto,
    GetAllClientsOutputDtoSchema,
    GetOneClientOutputDto,
    GetOneClientOutputDtoSchema,
    UpdateClientDto,
    UpdateClientPhoneDto,
} from './common/dto';

const {
    PREFIX,
    TAGS,
    ROUTES: {
        GET_ALL,
        GET_ONE,
        CREATE_ONE,
        UPDATE_ONE,
        DELETE_ONE,
        CREATE_PHONE,
        UPDATE_PHONE,
        DELETE_PHONE,
    },
} = CLIENTS_METADATA;

@ApiBearerAuth()
@ApiTags(...TAGS)
@Controller(PREFIX)
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get(GET_ALL.PATH)
    @ApiOperation({ operationId: GET_ALL.OPERATION_ID })
    @ZodApiQuery(GetAllClientsInputDtoSchema)
    @ZodSerializerDto(GetAllClientsOutputDtoSchema)
    @ApiOkResponse({ type: GetAllClientsOutputDto })
    public async getAll(@Query() query: GetAllClientsInputDto): Promise<IPaginationResult<Client>> {
        return this.clientsService.getAll(query);
    }

    @Get(GET_ONE.PATH)
    @ApiOperation({ operationId: GET_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneClientOutputDtoSchema)
    @ApiOkResponse({ type: GetOneClientOutputDto })
    public async getOneById(@Param(GET_ONE.PARAMS.ID, ParseIntPipe) id: number) {
        return this.clientsService.getOneById(id);
    }

    @Post(CREATE_ONE.PATH)
    @ApiOperation({ operationId: CREATE_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneClientOutputDtoSchema)
    @ApiCreatedResponse({ type: GetOneClientOutputDto })
    public async createOne(@Body() dto: CreateClientDto) {
        return this.clientsService.createOne(dto);
    }

    @Patch(UPDATE_ONE.PATH)
    @ApiOperation({ operationId: UPDATE_ONE.OPERATION_ID })
    @ZodSerializerDto(GetOneClientOutputDtoSchema)
    @ApiOkResponse({ type: GetOneClientOutputDto })
    public async updateOne(
        @Param(UPDATE_ONE.PARAMS.ID, ParseIntPipe) id: number,
        @Body() dto: UpdateClientDto,
    ) {
        return this.clientsService.updateOne(id, dto);
    }

    @Delete(DELETE_ONE.PATH)
    @ApiOperation({ operationId: DELETE_ONE.OPERATION_ID })
    public async deleteOne(@Param(DELETE_ONE.PARAMS.ID, ParseIntPipe) id: number): Promise<void> {
        return this.clientsService.deleteOne(id);
    }

    @Post(CREATE_PHONE.PATH)
    @ApiOperation({ operationId: CREATE_PHONE.OPERATION_ID })
    @ZodSerializerDto(GetOneClientOutputDtoSchema)
    @ApiCreatedResponse({ type: GetOneClientOutputDto })
    public async createPhone(
        @Param(CREATE_PHONE.PARAMS.ID, ParseIntPipe) id: number,
        @Body() dto: CreateClientPhoneDto,
    ) {
        return this.clientsService.createPhone(id, dto);
    }

    @Patch(UPDATE_PHONE.PATH)
    @ApiOperation({ operationId: UPDATE_PHONE.OPERATION_ID })
    @ZodSerializerDto(GetOneClientOutputDtoSchema)
    @ApiOkResponse({ type: GetOneClientOutputDto })
    public async updatePhone(
        @Param(UPDATE_PHONE.PARAMS.ID, ParseIntPipe) id: number,
        @Param(UPDATE_PHONE.PARAMS.PHONE_ID, ParseIntPipe) phoneId: number,
        @Body() dto: UpdateClientPhoneDto,
    ) {
        return this.clientsService.updatePhone(id, phoneId, dto);
    }

    @Delete(DELETE_PHONE.PATH)
    @ApiOperation({ operationId: DELETE_PHONE.OPERATION_ID })
    public async deletePhone(
        @Param(DELETE_PHONE.PARAMS.ID, ParseIntPipe) id: number,
        @Param(DELETE_PHONE.PARAMS.PHONE_ID, ParseIntPipe) phoneId: number,
    ): Promise<void> {
        return this.clientsService.deletePhone(id, phoneId);
    }
}
