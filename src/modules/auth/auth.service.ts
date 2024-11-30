import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import pick from 'lodash.pick';

import { User } from '~orm/entities';

import { UsersService } from '~modules/users';

import { SignUpInputDto } from './common/dto';
import { TAccessToken } from './common/types';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    private readonly SALT = 7;

    public async validateUser(
        username: User['username'],
        password: User['password'],
    ): Promise<User> {
        const user: User | null = await this.usersService.findOneByUsername({ username });

        if (!user) {
            throw new BadRequestException('User not found');
        }

        const isMatch: boolean = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            throw new BadRequestException('Password does not match');
        }

        return user;
    }

    public async signIn(user: Pick<User, 'username' | 'password'>): Promise<TAccessToken> {
        const payload = pick(user, ['id', 'username']);

        return { access_token: this.jwtService.sign(payload) };
    }

    public async signUp(dto: SignUpInputDto): Promise<TAccessToken> {
        const hashedPassword = await bcrypt.hash(dto.password, this.SALT);

        const newUser: Pick<User, 'username' | 'password'> = { ...dto, password: hashedPassword };

        await this.usersService.createOne(newUser);

        return this.signIn(newUser);
    }
}
