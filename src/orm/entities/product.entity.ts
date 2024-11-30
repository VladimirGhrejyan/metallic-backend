import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';

import { ProductCategory } from '~orm/entities/product-category.entity';

import { IProduct } from '~modules/products';

@Entity()
@Unique(['title'])
@Unique(['code'])
export class Product implements IProduct {
    static readonly TITLE_LENGTH: number = 200;

    static readonly CODE_LENGTH: number = 10;

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date | null;

    @DeleteDateColumn()
    deletedAt: Date | null;

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
