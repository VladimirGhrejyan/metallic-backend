import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { IClientPhone } from '~common/interfaces';

import { BaseEntity } from './base-entity';
import { Client } from './client.entity';

@Entity()
export class ClientPhone extends BaseEntity implements IClientPhone {
    static readonly PHONE_LENGTH = 20;

    static readonly NAME_LENGTH = 250;

    @Column({ type: 'int', nullable: false })
    clientId: number;

    @ManyToOne(() => Client, (client) => client.phones, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @Column({ type: 'varchar', length: ClientPhone.PHONE_LENGTH, nullable: false })
    phone: string;

    @Column({ type: 'varchar', length: ClientPhone.NAME_LENGTH, nullable: true })
    name: string | null;
}
