import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, FindManyOptions, In, Repository } from 'typeorm';

import { Order, OrderItem, Product } from '~orm/entities';

import { ClientsRepository } from '~modules/api/clients';
import { UtilsService } from '~modules/shared/utils';

import { PaginationHelper } from '~common/helpers/pagination';
import { IPaginationResult } from '~common/interfaces';

import { CreateOrderDto, GetAllOrdersInputDto, UpdateOrderDto } from './common/dto';

@Injectable()
export class OrdersRepository {
    constructor(
        @InjectRepository(Order) private readonly ordersRepository: Repository<Order>,

        @InjectRepository(OrderItem)
        private readonly orderItemsRepository: Repository<OrderItem>,

        @InjectRepository(Product) private readonly productsRepository: Repository<Product>,

        private readonly clientsRepository: ClientsRepository,

        private readonly utilsService: UtilsService,

        @InjectDataSource() private readonly dataSource: DataSource,
    ) {}

    public async getAll(
        criteria: GetAllOrdersInputDto,
        manager?: EntityManager,
    ): Promise<IPaginationResult<Order>> {
        const repository = this.getRepository(manager);

        return PaginationHelper.paginate<Order>(
            repository,
            this.utilsService.safePick(criteria, ['itemsPerPage', 'page']),
            this.buildGetAllQueryOptions(criteria),
        );
    }

    private buildGetAllQueryOptions(criteria: GetAllOrdersInputDto): FindManyOptions<Order> {
        const options: FindManyOptions<Order> = {
            order: {
                [criteria.sortBy]: criteria.order,
            },
            relations: ['client', 'items', 'items.product'],
            where: this.buildWhereConditionForGetAll(
                this.utilsService.safePick(criteria, ['clientId']),
            ),
        };

        return options;
    }

    private buildWhereConditionForGetAll(
        criteria: Pick<GetAllOrdersInputDto, 'clientId'>,
    ): FindManyOptions<Order>['where'] {
        const { clientId } = criteria;

        if (!clientId) {
            return {};
        }

        return { clientId };
    }

    public async createOne(dto: CreateOrderDto): Promise<Order> {
        return this.dataSource.transaction(async (manager) => {
            await this.clientsRepository.getClientOrThrowException(dto.clientId, manager);

            const productIds = dto.items.map((item) => item.productId);
            const products = await this.getProductsByIdsOrThrowException(productIds, manager);
            const productsMap = new Map(products.map((p) => [p.id, p]));

            const orderRepository = this.getRepository(manager);
            const createdOrder = await orderRepository.save({ clientId: dto.clientId });

            const orderItemsRepository = this.getItemsRepository(manager);
            const itemEntities = dto.items.map((item) => {
                const product = productsMap.get(item.productId)!;
                const price = product.costPrice * (1 + product.markup / 100);

                return {
                    orderId: createdOrder.id,
                    productId: item.productId,
                    count: item.count,
                    price,
                    productSnapshot: { title: product.title, code: product.code },
                };
            });

            await orderItemsRepository.save(itemEntities);

            return this.getOrderOrThrowException(createdOrder.id, manager);
        });
    }

    public async updateOne(id: Order['id'], dto: UpdateOrderDto): Promise<Order> {
        return this.dataSource.transaction(async (manager) => {
            const existingOrder = await this.getOrderOrThrowException(id, manager);

            if (dto.clientId && dto.clientId !== existingOrder.clientId) {
                await this.clientsRepository.getClientOrThrowException(dto.clientId, manager);
            }

            const orderRepository = this.getRepository(manager);

            if (dto.clientId) {
                await orderRepository.update({ id }, { clientId: dto.clientId });
            }

            if (dto.items) {
                const orderItemsRepository = this.getItemsRepository(manager);

                await orderItemsRepository.delete({ orderId: id });

                const productIds = dto.items.map((item) => item.productId);
                const products = await this.getProductsByIdsOrThrowException(productIds, manager);
                const productsMap = new Map(products.map((p) => [p.id, p]));

                const itemEntities = dto.items.map((item) => {
                    const product = productsMap.get(item.productId)!;
                    const price = product.costPrice * (1 + product.markup / 100);

                    return {
                        orderId: id,
                        productId: item.productId,
                        count: item.count,
                        price,
                        productSnapshot: { title: product.title, code: product.code },
                    };
                });

                await orderItemsRepository.save(itemEntities);
            }

            return this.getOrderOrThrowException(id, manager);
        });
    }

    public async deleteOne(id: Order['id'], manager?: EntityManager): Promise<void> {
        await this.getOrderOrThrowException(id, manager);

        const repository = this.getRepository(manager);

        await repository.delete(id);
    }

    public async getOrderOrThrowException(
        id: Order['id'],
        manager?: EntityManager,
    ): Promise<Order> {
        const repository = this.getRepository(manager);

        const order = await repository.findOne({
            where: { id },
            relations: ['client', 'items', 'items.product'],
        });

        if (!order) {
            throw new NotFoundException('Order not found');
        }

        return order;
    }

    private async getProductsByIdsOrThrowException(
        ids: number[],
        manager?: EntityManager,
    ): Promise<Product[]> {
        const repository = manager ? manager.getRepository(Product) : this.productsRepository;

        const products = await repository.findBy({ id: In(ids) });

        if (products.length !== ids.length) {
            const foundIds = new Set(products.map((p) => p.id));
            const missingIds = ids.filter((id) => !foundIds.has(id));
            throw new NotFoundException(`Products not found: ${missingIds.join(', ')}`);
        }

        return products;
    }

    private getRepository(manager?: EntityManager): Repository<Order> {
        return manager ? manager.getRepository(Order) : this.ordersRepository;
    }

    private getItemsRepository(manager?: EntityManager): Repository<OrderItem> {
        return manager ? manager.getRepository(OrderItem) : this.orderItemsRepository;
    }
}
