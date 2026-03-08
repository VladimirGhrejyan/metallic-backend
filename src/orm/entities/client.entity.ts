import { Column, Entity, OneToMany } from 'typeorm';

import { IClient } from '~common/interfaces';

import { BaseEntity } from './base-entity';
import { ClientPhone } from './client-phone.entity';

@Entity()
export class Client extends BaseEntity implements IClient {
    static readonly NAME_LENGTH = 250;

    static readonly ADDRESS_LENGTH = 500;

    static readonly TRN_LENGTH = 20;

    @Column({ type: 'varchar', length: Client.NAME_LENGTH, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: Client.ADDRESS_LENGTH, nullable: true })
    address: string | null;

    @Column({ type: 'float', nullable: false, default: 0 })
    priceAdjustment: number;

    @Column({ type: 'varchar', length: Client.TRN_LENGTH, nullable: true })
    taxpayerRegistrationNumber: string | null;

    @OneToMany(() => ClientPhone, (phone) => phone.client)
    phones?: ClientPhone[];
}
