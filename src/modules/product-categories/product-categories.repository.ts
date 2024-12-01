import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductCategory } from '~orm/entities';

import { CreateProductCategoryDto, UpdateProductCategoryDto } from './common/dto';

@Injectable()
export class ProductCategoriesRepository {
    constructor(
        @InjectRepository(ProductCategory)
        private readonly productCategoryRepository: Repository<ProductCategory>,
    ) {}

    public async createOne(dto: CreateProductCategoryDto): Promise<void> {
        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('title', dto.title),
            this.checkPropertyUniquenessOrThrowException('code', dto.code),
        ]);

        await this.productCategoryRepository.insert(dto);
    }

    public async updateOne(
        id: ProductCategory['id'],
        dto: UpdateProductCategoryDto,
    ): Promise<void> {
        const existingCategory = await this.getCategoryOrThrowException(id);

        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('title', dto.title, id),
            this.checkPropertyUniquenessOrThrowException('code', dto.code, id),
        ]);

        await this.productCategoryRepository.update({ id }, { ...existingCategory, ...dto });
    }

    public async deleteOne(id: ProductCategory['id']): Promise<void> {
        await this.getCategoryOrThrowException(id);

        await this.productCategoryRepository.softDelete(id);
    }

    private async getCategoryOrThrowException(id: ProductCategory['id']): Promise<ProductCategory> {
        const category = await this.productCategoryRepository.findOneBy({ id });

        if (!category) {
            throw new NotFoundException('Category not found');
        }

        return category;
    }

    private async checkPropertyUniquenessOrThrowException<
        K extends keyof Pick<ProductCategory, 'title' | 'code'>,
    >(property: K, value?: ProductCategory[K], id?: ProductCategory['id']): Promise<void> {
        if (!value) {
            return;
        }

        const existingCategory = await this.productCategoryRepository.findOneBy({
            [property]: value,
        });

        if (existingCategory && existingCategory.id !== id) {
            throw new ConflictException(`Category with ${property} ${value} already exists`);
        }
    }
}
