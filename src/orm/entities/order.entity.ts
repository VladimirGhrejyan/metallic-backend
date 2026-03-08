import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { IOrder } from '~common/interfaces';

import { BaseEntity } from './base-entity';
import { Client } from './client.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order extends BaseEntity implements IOrder {
    @Column({ type: 'int', nullable: false })
    clientId: number;

    @ManyToOne(() => Client, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @OneToMany(() => OrderItem, (item) => item.order)
    items: OrderItem[];
}
