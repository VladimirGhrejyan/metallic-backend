import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '~orm/entities';

import { ProductCategoriesRepository } from '~modules/product-categories';

import { CreateProductDto, UpdateProductDto } from './common/dto';

@Injectable()
export class ProductsRepository extends Repository<Product> {
    constructor(
        @InjectRepository(Product) private readonly productsRepository: Repository<Product>,

        private readonly categoriesRepository: ProductCategoriesRepository,
    ) {
        super(
            productsRepository.target,
            productsRepository.manager,
            productsRepository.queryRunner,
        );
    }

    public async createOne(dto: CreateProductDto): Promise<void> {
        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('code', dto.code),
            this.categoriesRepository.getCategoryOrThrowException(dto.categoryId),
        ]);

        await this.productsRepository.insert(dto);
    }

    public async updateOne(id: Product['id'], dto: UpdateProductDto): Promise<void> {
        const existingProduct = await this.getProductOrThrowException(id);

        if (dto.code && dto.code !== existingProduct.code) {
            await this.checkPropertyUniquenessOrThrowException('code', dto.code, id);
        }

        if (dto.categoryId && dto.categoryId !== existingProduct.categoryId) {
            await this.categoriesRepository.getCategoryOrThrowException(dto.categoryId);
        }

        await this.productsRepository.update({ id }, { ...existingProduct, ...dto });
    }

    public async deleteOne(id: Product['id']): Promise<void> {
        await this.getProductOrThrowException(id);

        await this.productsRepository.softDelete(id);
    }

    private async checkPropertyUniquenessOrThrowException<K extends keyof Pick<Product, 'code'>>(
        property: K,
        value?: Product[K],
        id?: Product['id'],
    ): Promise<void> {
        if (!value) {
            return;
        }

        const existingProduct = await this.productsRepository.findOneBy({
            [property]: value,
        });

        if (existingProduct && existingProduct.id !== id) {
            throw new ConflictException(`Product with ${property} ${value} already exists`);
        }
    }

    private async getProductOrThrowException(id: Product['id']): Promise<Product> {
        const product = await this.productsRepository.findOneBy({ id });

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return product;
    }
}
