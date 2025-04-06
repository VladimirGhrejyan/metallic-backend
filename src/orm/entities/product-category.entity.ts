import { Column, Entity, OneToMany, Unique } from 'typeorm';

import { IProductCategory } from '~common/interfaces';

import { BaseEntity } from './base-entity';
import { Product } from './product.entity';

@Entity()
@Unique(['title', 'code'])
export class ProductCategory extends BaseEntity implements IProductCategory {
    static readonly TITLE_LENGTH = 200;

    static readonly CODE_LENGTH = 10;

    @Column({ type: 'varchar', length: ProductCategory.TITLE_LENGTH, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: ProductCategory.CODE_LENGTH, nullable: false })
    code: string;

    @OneToMany(() => Product, (product) => product.category, { cascade: true })
    products: Product[];
}
