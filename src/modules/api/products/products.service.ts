import { BadRequestException, Injectable } from '@nestjs/common';

import { Product } from '~orm/entities';

import { UploadsService } from '~modules/uploads';

import { IPaginationResult } from '~common/interfaces';

import { CreateProductDto, GetAllProductsInputDto, UpdateProductDto } from './common/dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(
        private readonly productsRepository: ProductsRepository,
        private readonly uploadsService: UploadsService,
    ) {}

    public async getAll(criteria: GetAllProductsInputDto): Promise<IPaginationResult<Product>> {
        return this.productsRepository.getAll(criteria);
    }

    public async getOneById(id: Product['id']): Promise<Product> {
        return this.productsRepository.getProductOrThrowException(id);
    }

    public async createOne(dto: CreateProductDto): Promise<void> {
        return this.productsRepository.createOne(dto);
    }

    public async updateOne(id: number, dto: UpdateProductDto): Promise<void> {
        return this.productsRepository.updateOne(id, dto);
    }

    public async deleteOne(id: number): Promise<void> {
        return this.productsRepository.deleteOne(id);
    }

    public async updateOneImage(id: Product['id'], image?: Express.Multer.File): Promise<void> {
        if (!image) {
            throw new BadRequestException('Image not found!');
        }

        const product = await this.productsRepository.getProductOrThrowException(id);

        if (product.imageId) {
            await this.uploadsService.deleteOne(product.imageId);
        }

        const uploadedImage = await this.uploadsService.uploadImage(image, {
            name: `product-${product.code}`,
        });

        await this.productsRepository.updateOneImage(id, uploadedImage.id);
    }
}
