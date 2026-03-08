import { Injectable } from '@nestjs/common';

import { Order } from '~orm/entities';

import { IPaginationResult } from '~common/interfaces';

import { CreateOrderDto, GetAllOrdersInputDto, UpdateOrderDto } from './common/dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
    constructor(private readonly ordersRepository: OrdersRepository) {}

    public async getAll(criteria: GetAllOrdersInputDto): Promise<IPaginationResult<Order>> {
        return this.ordersRepository.getAll(criteria);
    }

    public async getOneById(id: Order['id']): Promise<Order> {
        return this.ordersRepository.getOrderOrThrowException(id);
    }

    public async createOne(dto: CreateOrderDto): Promise<Order> {
        return this.ordersRepository.createOne(dto);
    }

    public async updateOne(id: number, dto: UpdateOrderDto): Promise<Order> {
        return this.ordersRepository.updateOne(id, dto);
    }

    public async deleteOne(id: number): Promise<void> {
        return this.ordersRepository.deleteOne(id);
    }
}
