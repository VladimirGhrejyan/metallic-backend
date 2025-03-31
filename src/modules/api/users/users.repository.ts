import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { User } from '~orm/entities';

import { SignUpInputDto } from '~modules/api/auth/common/dto';

@Injectable()
export class UsersRepository {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    public async findOneByEmail(
        criteria: Pick<User, 'email'>,
        manager?: EntityManager,
    ): Promise<User | null> {
        const repository = this.getRepository(manager);

        return repository.findOneBy(criteria);
    }

    public async getOne(email: User['email'], manager?: EntityManager): Promise<User> {
        const repository = this.getRepository(manager);

        const user = await repository.findOne({ where: { email: email } });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    public async createOne(userPayload: SignUpInputDto): Promise<void> {
        await this.checkEmailUniquenessOrThrowException(userPayload.email);

        await this.usersRepository.insert(userPayload);
    }

    private async checkEmailUniquenessOrThrowException(
        email: User['email'],
        manager?: EntityManager,
    ): Promise<void> {
        const existingUser = await this.findOneByEmail({ email: email }, manager);

        if (existingUser) {
            throw new ConflictException(`Email ${email} already in use`);
        }
    }

    private getRepository(manager?: EntityManager): Repository<User> {
        return manager ? manager.getRepository(User) : this.usersRepository;
    }
}
