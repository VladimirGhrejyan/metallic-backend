import { Column, Entity } from 'typeorm';

import { IUser } from '~common/interfaces';

import { BaseEntity } from './base-entity';

@Entity()
export class User extends BaseEntity implements IUser {
    static readonly USERNAME_LENGTH = 100;

    static readonly PASSWORD_LENGTH = 30;

    @Column({ type: 'varchar', nullable: false, length: User.USERNAME_LENGTH })
    username: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;
}
