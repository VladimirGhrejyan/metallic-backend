import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '~orm/entities';

import { SignUpInputDto } from '~modules/auth/common/dto';

@Injectable()
export class UsersRepository {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    public async findOneByUsername(criteria: Pick<User, 'username'>): Promise<User | null> {
        return this.usersRepository.findOneBy(criteria);
    }

    public async createOne(userPayload: SignUpInputDto): Promise<void> {
        await this.checkUsernameUniquenessOrThrowException(userPayload.username);

        await this.usersRepository.insert(userPayload);
    }

    private async checkUsernameUniquenessOrThrowException(
        username: User['username'],
    ): Promise<void> {
        const existingUser = await this.findOneByUsername({ username });

        if (existingUser) {
            throw new ConflictException(`Username ${username} already exists`);
        }
    }
}