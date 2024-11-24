import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { IUser } from '~modules/users';

@Entity()
export class User implements IUser {
    static readonly USERNAME_LENGTH = 100;

    static readonly PASSWORD_LENGTH = 30;

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ type: 'varchar', nullable: false, length: User.USERNAME_LENGTH })
    username: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;
}
