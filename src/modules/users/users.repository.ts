import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '~orm/entities';

import { SignUpInputDto } from '~modules/auth/common/dto';

@Injectable()
export class UsersRepository extends Repository<User> {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {
        super(usersRepository.target, usersRepository.manager, usersRepository.queryRunner);
    }

    public async findOneByEmail(criteria: Pick<User, 'email'>): Promise<User | null> {
        return this.usersRepository.findOneBy(criteria);
    }

    public async getOne(email: User['email']): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { email: email } });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    public async createOne(userPayload: SignUpInputDto): Promise<void> {
        await this.checkEmailUniquenessOrThrowException(userPayload.email);

        await this.usersRepository.insert(userPayload);
    }

    private async checkEmailUniquenessOrThrowException(email: User['email']): Promise<void> {
        const existingUser = await this.findOneByEmail({ email: email });

        if (existingUser) {
            throw new ConflictException(`Email ${email} already in use`);
        }
    }
}
