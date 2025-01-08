import { Column, Entity } from 'typeorm';

import { IUser } from '~common/interfaces';

import { BaseEntity } from './base-entity';

@Entity()
export class User extends BaseEntity implements IUser {
    static readonly EMAIL_LENGTH: number = 320;

    static readonly PASSWORD_LENGTH: number = 30;

    @Column({ type: 'varchar', nullable: false, length: User.EMAIL_LENGTH })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;
}
