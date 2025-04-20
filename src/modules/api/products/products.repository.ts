import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, FindManyOptions, ILike, Repository } from 'typeorm';

import { Product, Upload } from '~orm/entities';

import { ProductCategoriesRepository } from '~modules/api/product-categories';
import { UtilsService } from '~modules/shared/utils';

import { PaginationHelper } from '~common/helpers/pagination';
import { IPaginationResult } from '~common/interfaces';

import { CreateProductDto, GetAllProductsInputDto, UpdateProductDto } from './common/dto';

@Injectable()
export class ProductsRepository {
    constructor(
        @InjectRepository(Product) private readonly productsRepository: Repository<Product>,

        private readonly categoriesRepository: ProductCategoriesRepository,

        private readonly utilsService: UtilsService,
    ) {}

    SEARCHABLE_FIELDS: Array<keyof Product> = ['code', 'title'];

    public async getAll(
        criteria: GetAllProductsInputDto,
        manager?: EntityManager,
    ): Promise<IPaginationResult<Product>> {
        const repository = this.getRepository(manager);

        return PaginationHelper.paginate<Product>(
            repository,
            this.utilsService.safePick(criteria, ['itemsPerPage', 'page']),
            this.buildGetAllQueryOptions(criteria),
        );
    }

    private buildGetAllQueryOptions(criteria: GetAllProductsInputDto): FindManyOptions<Product> {
        const options: FindManyOptions<Product> = {
            order: {
                [criteria.sortBy]: criteria.order,
            },
            where: this.buildWhereConditionForGetAll(
                this.utilsService.safePick(criteria, ['categoryId', 'search']),
            ),
            relations: ['image'],
        };

        return options;
    }

    private buildWhereConditionForGetAll(
        criteria: Pick<GetAllProductsInputDto, 'categoryId' | 'search'>,
    ): FindManyOptions<Product>['where'] {
        const { categoryId, search } = criteria;

        if (!categoryId && !search) {
            return {};
        }

        if (!search) {
            return { categoryId };
        }

        return this.SEARCHABLE_FIELDS.map((key) => ({
            [key]: ILike(`%${search}%`),
            ...(!!categoryId && { categoryId }),
        }));
    }

    public async createOne(dto: CreateProductDto, manager?: EntityManager): Promise<Product> {
        await Promise.all([
            this.checkPropertyUniquenessOrThrowException('code', dto.code, null, manager),
            this.categoriesRepository.getCategoryOrThrowException(dto.categoryId, manager),
        ]);

        const repository = this.getRepository(manager);

        const createdProduct = await repository.save(dto);

        return createdProduct;
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

    public async getProductOrThrowException(
        id: Product['id'],
        manager?: EntityManager,
    ): Promise<Product> {
        const repository = this.getRepository(manager);

        const product = await repository.findOne({
            where: { id },
            relations: ['category', 'image'],
        });

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return product;
    }

    public async updateOneImage(productId: Product['id'], imageId: Upload['id']): Promise<void> {
        await this.productsRepository.update(productId, { imageId });
    }

    private getRepository(manager?: EntityManager): Repository<Product> {
        return manager ? manager.getRepository(Product) : this.productsRepository;
    }
}
