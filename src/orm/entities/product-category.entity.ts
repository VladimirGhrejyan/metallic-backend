import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';

import { Product } from '~orm/entities/product.entity';

import { IProductCategory } from '~modules/product-categories';

@Entity()
@Unique(['title'])
@Unique(['code'])
export class ProductCategory implements IProductCategory {
    static readonly TITLE_LENGTH = 200;

    static readonly CODE_LENGTH = 10;

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date | null;

    @DeleteDateColumn()
    deletedAt: Date | null;

    @Column({ type: 'varchar', length: ProductCategory.TITLE_LENGTH, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: ProductCategory.CODE_LENGTH, nullable: false })
    code: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
