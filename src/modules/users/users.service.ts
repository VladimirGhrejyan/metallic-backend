import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '~orm/entities';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    public async findOneByUsername(criteria: Pick<User, 'username'>): Promise<User | null> {
        return this.usersRepository.findOneBy(criteria);
    }

    public async createOne(userPayload: Pick<User, 'username' | 'password'>): Promise<void> {
        await this.usersRepository.insert(userPayload);
    }
}
