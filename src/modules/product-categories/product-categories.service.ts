import { Injectable } from '@nestjs/common';

import { CreateProductCategoryDto, UpdateProductCategoryDto } from './common/dto';
import { TProductCategoriesResponse } from './common/types';
import { ProductCategoriesRepository } from './product-categories.repository';

@Injectable()
export class ProductCategoriesService {
    constructor(private readonly productCategoriesRepository: ProductCategoriesRepository) {}

    public async createOne(dto: CreateProductCategoryDto): Promise<void> {
        return this.productCategoriesRepository.createOne(dto);
    }

    public async updateOne(id: number, dto: UpdateProductCategoryDto): Promise<void> {
        return this.productCategoriesRepository.updateOne(id, dto);
    }

    public async deleteOne(id: number): Promise<void> {
        return this.productCategoriesRepository.deleteOne(id);
    }

    public async getAll(): Promise<TProductCategoriesResponse> {
        const categories = await this.productCategoriesRepository.getAllCategories();

        return {
            items: categories,
        };
    }
}
