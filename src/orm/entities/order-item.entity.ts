import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { IOrderItem, IProductSnapshot } from '~common/interfaces';

import { BaseEntity } from './base-entity';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class OrderItem extends BaseEntity implements IOrderItem {
    @Column({ type: 'int', nullable: false })
    orderId: number;

    @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @Column({ type: 'int', nullable: true })
    productId: number | null;

    @ManyToOne(() => Product, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'product_id' })
    product: Product | null;

    @Column({ type: 'int', nullable: false })
    count: number;

    @Column({ type: 'float', nullable: false })
    price: number;

    @Column({ type: 'jsonb', nullable: false })
    productSnapshot: IProductSnapshot;
}
