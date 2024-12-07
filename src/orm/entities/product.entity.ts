import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';

import { IProduct } from '~modules/products';

import { BaseEntity } from './base-entity';
import { ProductCategory } from './product-category.entity';

@Entity()
@Unique(['code'])
export class Product extends BaseEntity implements IProduct {
    static readonly TITLE_LENGTH: number = 200;

    static readonly CODE_LENGTH: number = 10;

    @Column({ type: 'varchar', length: Product.TITLE_LENGTH, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: Product.CODE_LENGTH, nullable: false })
    code: string;

    @Column({ type: 'float', nullable: false })
    costPrice: number;

    @Column({ type: 'float', nullable: false })
    markup: number;

    @Column({ type: 'integer' })
    categoryId: number;

    @ManyToOne(() => ProductCategory, (category) => category.products, {
        onDelete: 'SET NULL',
    })
    @JoinColumn({ name: 'categoryId' })
    category: ProductCategory;
}
