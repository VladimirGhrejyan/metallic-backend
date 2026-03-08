import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindManyOptions, ILike, Repository } from 'typeorm';

import { Client, ClientPhone } from '~orm/entities';

import { UtilsService } from '~modules/shared/utils';

import { PaginationHelper } from '~common/helpers/pagination';
import { IPaginationResult } from '~common/interfaces';

import {
    CreateClientDto,
    CreateClientPhoneDto,
    GetAllClientsInputDto,
    UpdateClientDto,
    UpdateClientPhoneDto,
} from './common/dto';

@Injectable()
export class ClientsRepository {
    constructor(
        @InjectRepository(Client) private readonly clientsRepository: Repository<Client>,

        @InjectRepository(ClientPhone)
        private readonly clientPhonesRepository: Repository<ClientPhone>,

        private readonly utilsService: UtilsService,
    ) {}

    SEARCHABLE_FIELDS: Array<keyof Client> = ['name', 'taxpayerRegistrationNumber'];

    public async getAll(
        criteria: GetAllClientsInputDto,
        manager?: EntityManager,
    ): Promise<IPaginationResult<Client>> {
        const repository = this.getRepository(manager);

        return PaginationHelper.paginate<Client>(
            repository,
            this.utilsService.safePick(criteria, ['itemsPerPage', 'page']),
            this.buildGetAllQueryOptions(criteria),
        );
    }

    private buildGetAllQueryOptions(criteria: GetAllClientsInputDto): FindManyOptions<Client> {
        const options: FindManyOptions<Client> = {
            order: {
                [criteria.sortBy]: criteria.order,
            },
            where: this.buildWhereConditionForGetAll(
                this.utilsService.safePick(criteria, ['search']),
            ),
            relations: ['phones'],
        };

        return options;
    }

    private buildWhereConditionForGetAll(
        criteria: Pick<GetAllClientsInputDto, 'search'>,
    ): FindManyOptions<Client>['where'] {
        const { search } = criteria;

        if (!search) {
            return {};
        }

        return this.SEARCHABLE_FIELDS.map((key) => ({
            [key]: ILike(`%${search}%`),
        }));
    }

    public async createOne(dto: CreateClientDto, manager?: EntityManager): Promise<Client> {
        const repository = this.getRepository(manager);

        const { phones, ...clientData } = dto;

        const createdClient = await repository.save(clientData);

        if (phones?.length) {
            const phonesRepository = this.getPhonesRepository(manager);
            const phoneEntities = phones.map((phone) => ({
                ...phone,
                clientId: createdClient.id,
            }));
            await phonesRepository.save(phoneEntities);
        }

        return createdClient;
    }

    public async updateOne(
        id: Client['id'],
        dto: UpdateClientDto,
        manager?: EntityManager,
    ): Promise<void> {
        const existingClient = await this.getClientOrThrowException(id, manager);

        const repository = this.getRepository(manager);

        await repository.update({ id }, { ...existingClient, ...dto });
    }

    public async deleteOne(id: Client['id'], manager?: EntityManager): Promise<void> {
        await this.getClientOrThrowException(id, manager);

        const repository = this.getRepository(manager);

        await repository.delete(id);
    }

    public async getClientOrThrowException(
        id: Client['id'],
        manager?: EntityManager,
    ): Promise<Client> {
        const repository = this.getRepository(manager);

        const client = await repository.findOne({
            where: { id },
            relations: ['phones'],
        });

        if (!client) {
            throw new NotFoundException('Client not found');
        }

        return client;
    }

    public async createPhone(
        clientId: Client['id'],
        dto: CreateClientPhoneDto,
        manager?: EntityManager,
    ): Promise<ClientPhone> {
        await this.getClientOrThrowException(clientId, manager);

        const phonesRepository = this.getPhonesRepository(manager);

        return phonesRepository.save({ ...dto, clientId });
    }

    public async updatePhone(
        clientId: Client['id'],
        phoneId: ClientPhone['id'],
        dto: UpdateClientPhoneDto,
        manager?: EntityManager,
    ): Promise<void> {
        await this.getClientOrThrowException(clientId, manager);

        const existingPhone = await this.getPhoneOrThrowException(clientId, phoneId, manager);

        const phonesRepository = this.getPhonesRepository(manager);

        await phonesRepository.update({ id: phoneId }, { ...existingPhone, ...dto });
    }

    public async deletePhone(
        clientId: Client['id'],
        phoneId: ClientPhone['id'],
        manager?: EntityManager,
    ): Promise<void> {
        await this.getPhoneOrThrowException(clientId, phoneId, manager);

        const phonesRepository = this.getPhonesRepository(manager);

        await phonesRepository.delete(phoneId);
    }

    private async getPhoneOrThrowException(
        clientId: Client['id'],
        phoneId: ClientPhone['id'],
        manager?: EntityManager,
    ): Promise<ClientPhone> {
        const phonesRepository = this.getPhonesRepository(manager);

        const phone = await phonesRepository.findOneBy({ id: phoneId, clientId });

        if (!phone) {
            throw new NotFoundException('Client phone not found');
        }

        return phone;
    }

    private getRepository(manager?: EntityManager): Repository<Client> {
        return manager ? manager.getRepository(Client) : this.clientsRepository;
    }

    private getPhonesRepository(manager?: EntityManager): Repository<ClientPhone> {
        return manager ? manager.getRepository(ClientPhone) : this.clientPhonesRepository;
    }
}
