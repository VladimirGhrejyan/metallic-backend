import { Injectable } from '@nestjs/common';

import { Client, ClientPhone } from '~orm/entities';

import { IPaginationResult } from '~common/interfaces';

import { ClientsRepository } from './clients.repository';
import {
    CreateClientDto,
    CreateClientPhoneDto,
    GetAllClientsInputDto,
    UpdateClientDto,
    UpdateClientPhoneDto,
} from './common/dto';

@Injectable()
export class ClientsService {
    constructor(private readonly clientsRepository: ClientsRepository) {}

    public async getAll(criteria: GetAllClientsInputDto): Promise<IPaginationResult<Client>> {
        return this.clientsRepository.getAll(criteria);
    }

    public async getOneById(id: Client['id']): Promise<Client> {
        return this.clientsRepository.getClientOrThrowException(id);
    }

    public async createOne(dto: CreateClientDto): Promise<Client> {
        const createdClient = await this.clientsRepository.createOne(dto);

        return this.clientsRepository.getClientOrThrowException(createdClient.id);
    }

    public async updateOne(id: number, dto: UpdateClientDto): Promise<Client> {
        await this.clientsRepository.updateOne(id, dto);

        return this.clientsRepository.getClientOrThrowException(id);
    }

    public async deleteOne(id: number): Promise<void> {
        return this.clientsRepository.deleteOne(id);
    }

    public async createPhone(clientId: Client['id'], dto: CreateClientPhoneDto): Promise<Client> {
        await this.clientsRepository.createPhone(clientId, dto);

        return this.clientsRepository.getClientOrThrowException(clientId);
    }

    public async updatePhone(
        clientId: Client['id'],
        phoneId: ClientPhone['id'],
        dto: UpdateClientPhoneDto,
    ): Promise<Client> {
        await this.clientsRepository.updatePhone(clientId, phoneId, dto);

        return this.clientsRepository.getClientOrThrowException(clientId);
    }

    public async deletePhone(clientId: Client['id'], phoneId: ClientPhone['id']): Promise<void> {
        return this.clientsRepository.deletePhone(clientId, phoneId);
    }
}
