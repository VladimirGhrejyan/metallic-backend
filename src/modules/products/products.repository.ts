import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { Product } from '~orm/entities';

import { ProductCategoriesRepository } from '~modules/product-categories';

import { CreateProductDto, UpdateProductDto } from './common/dto';

@Injectable()
export class ProductsRepository {
    constructor(
        @InjectRepository(Product) private readonly productsRepository: Repository<Product>,

        private readonly categoriesRepository: ProductCategoriesRepository,
    ) {}

    public async createOne(dto: CreateProductDto, manager?: EntityManager): Promise<void> {
        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('code', dto.code, null, manager),
            this.categoriesRepository.getCategoryOrThrowException(dto.categoryId, manager),
        ]);

        const repository = this.getRepository(manager);

        await repository.insert(dto);
    }

    public async updateOne(
        id: Product['id'],
        dto: UpdateProductDto,
        manager?: EntityManager,
    ): Promise<void> {
        const existingProduct = await this.getProductOrThrowException(id, manager);

        if (dto.code && dto.code !== existingProduct.code) {
            await this.checkPropertyUniquenessOrThrowException('code', dto.code, id, manager);
        }

        if (dto.categoryId && dto.categoryId !== existingProduct.categoryId) {
            await this.categoriesRepository.getCategoryOrThrowException(dto.categoryId, manager);
        }

        const repository = this.getRepository(manager);

        await repository.update({ id }, { ...existingProduct, ...dto });
    }

    public async deleteOne(id: Product['id'], manager?: EntityManager): Promise<void> {
        await this.getProductOrThrowException(id, manager);

        const repository = this.getRepository(manager);

        await repository.delete(id);
    }

    private async checkPropertyUniquenessOrThrowException<K extends keyof Pick<Product, 'code'>>(
        property: K,
        value?: Product[K] | null,
        id?: Product['id'] | null,
        manager?: EntityManager,
    ): Promise<void> {
        if (!value) {
            return;
        }

        const repository = this.getRepository(manager);

        const existingProduct = await repository.findOneBy({
            [property]: value,
        });

        if (existingProduct && existingProduct.id !== id) {
            throw new ConflictException(`Product with ${property} ${value} already exists`);
        }
    }

    private async getProductOrThrowException(
        id: Product['id'],
        manager?: EntityManager,
    ): Promise<Product> {
        const repository = this.getRepository(manager);

        const product = await repository.findOneBy({ id });

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return product;
    }

    private getRepository(manager?: EntityManager): Repository<Product> {
        return manager ? manager.getRepository(Product) : this.productsRepository;
    }
}
