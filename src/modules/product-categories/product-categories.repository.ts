import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindManyOptions, ILike, Repository } from 'typeorm';

import { ProductCategory } from '~orm/entities';

import {
    CreateProductCategoryDto,
    GetAllCategoriesInputDto,
    UpdateProductCategoryDto,
} from './common/dto';

@Injectable()
export class ProductCategoriesRepository {
    constructor(
        @InjectRepository(ProductCategory)
        private readonly productCategoryRepository: Repository<ProductCategory>,
    ) {}

    public async createOne(dto: CreateProductCategoryDto, manager?: EntityManager): Promise<void> {
        const repository = this.getRepository(manager);

        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('title', dto.title, null, manager),
            this.checkPropertyUniquenessOrThrowException('code', dto.code, null, manager),
        ]);

        await repository.insert(dto);
    }

    public async updateOne(
        id: ProductCategory['id'],
        dto: UpdateProductCategoryDto,
        manager?: EntityManager,
    ): Promise<void> {
        const existingCategory = await this.getCategoryOrThrowException(id, manager);

        const repository = this.getRepository(manager);

        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('title', dto.title, id, manager),
            this.checkPropertyUniquenessOrThrowException('code', dto.code, id, manager),
        ]);

        await repository.update({ id }, { ...existingCategory, ...dto });
    }

    public async deleteOne(id: ProductCategory['id'], manager?: EntityManager): Promise<void> {
        await this.getCategoryOrThrowException(id, manager);

        const repository = this.getRepository(manager);

        await repository.delete(id);
    }

    public async getCategoryOrThrowException(
        id: ProductCategory['id'],
        manager?: EntityManager,
    ): Promise<ProductCategory> {
        const repository = this.getRepository(manager);

        const category = await repository.findOneBy({ id });

        if (!category) {
            throw new NotFoundException('Category not found');
        }

        return category;
    }

    public async getAllCategories(
        criteria: GetAllCategoriesInputDto,
        manager?: EntityManager,
    ): Promise<ProductCategory[]> {
        const repository = this.getRepository(manager);

        const categories = await repository.find(this.buildFindOptions(criteria));

        if (!categories) {
            throw new NotFoundException('Categories not found');
        }

        return categories;
    }

    private buildFindOptions(criteria: GetAllCategoriesInputDto): FindManyOptions<ProductCategory> {
        const options: FindManyOptions<ProductCategory> = {};

        if (criteria?.search) {
            options.where = [
                { title: ILike(`%${criteria.search}%`) },
                { code: ILike(`%${criteria.search}%`) },
            ];
        }

        return options;
    }

    private async checkPropertyUniquenessOrThrowException<
        K extends keyof Pick<ProductCategory, 'title' | 'code'>,
    >(
        property: K,
        value?: ProductCategory[K] | null,
        id?: ProductCategory['id'] | null,
        manager?: EntityManager,
    ): Promise<void> {
        if (!value) {
            return;
        }

        const repository = this.getRepository(manager);

        const existingCategory = await repository.findOneBy({
            [property]: value,
        });

        if (existingCategory && existingCategory.id !== id) {
            throw new ConflictException(`Category with ${property} ${value} already exists`);
        }
    }

    private getRepository(manager?: EntityManager): Repository<ProductCategory> {
        return manager ? manager.getRepository(ProductCategory) : this.productCategoryRepository;
    }
}
