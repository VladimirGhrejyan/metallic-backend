import { Column, Entity, JoinColumn, ManyToOne, OneToOne, Unique } from 'typeorm';

import { Upload } from '~orm/entities';

import { IProduct } from '~common/interfaces';

import { BaseEntity } from './base-entity';
import { ProductCategory } from './product-category.entity';

@Entity()
@Unique(['code'])
export class Product extends BaseEntity implements IProduct {
    static readonly TITLE_LENGTH = 250;

    static readonly CODE_LENGTH = 20;

    static readonly DESCRIPTION_LENGTH = 1000;

    @Column({ type: 'varchar', length: Product.TITLE_LENGTH, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: Product.CODE_LENGTH, nullable: false })
    code: string;

    @Column({ type: 'float', nullable: false })
    costPrice: number;

    @Column({ type: 'float', nullable: false, default: 0 })
    markup: number;

    @Column({ type: 'int', default: 0 })
    quantityAvailable: number;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    description: string | null;

    @Column({ type: 'int', nullable: false })
    categoryId: number;

    @ManyToOne(() => ProductCategory, (category) => category.products, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'category_id' })
    category: ProductCategory;

    @Column({ type: 'int', nullable: true })
    imageId: number | null;

    @OneToOne(() => Upload, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'image_id' })
    image: Upload | null;
}
