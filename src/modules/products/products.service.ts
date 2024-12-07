import { Injectable } from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from './common/dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    public async createOne(dto: CreateProductDto): Promise<void> {
        return this.productsRepository.createOne(dto);
    }

    public async updateOne(id: number, dto: UpdateProductDto): Promise<void> {
        return this.productsRepository.updateOne(id, dto);
    }

    public async deleteOne(id: number): Promise<void> {
        return this.productsRepository.deleteOne(id);
    }
}
