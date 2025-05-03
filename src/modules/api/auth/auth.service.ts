import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '~orm/entities';

import { UsersRepository } from '~modules/api/users';
import { CryptoService } from '~modules/shared/crypto';
import { UtilsService } from '~modules/shared/utils';

import { SignUpInputDto } from './common/dto';
import { TAccessToken } from './common/types';

@Injectable()
export class AuthService {
    constructor(
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
        private utilsService: UtilsService,
        private cryptoService: CryptoService,
    ) {}

    private readonly SALT = 7;

    public async validateUser(email: User['email'], password: User['password']): Promise<User> {
        const user: User | null = await this.usersRepository.findOneByEmail({ email: email });

        if (!user) {
            throw new BadRequestException('User not found');
        }

        const isMatch: boolean = this.cryptoService.compareSync(password, user.password);

        if (!isMatch) {
            throw new BadRequestException('Password does not match');
        }

        return user;
    }

    public async signIn(user: Pick<User, 'email' | 'password'>): Promise<TAccessToken> {
        const payload = this.utilsService.safePick(user, ['email', 'password']);

        return { access_token: this.jwtService.sign(payload) };
    }

    public async signUp(dto: SignUpInputDto): Promise<TAccessToken> {
        const hashedPassword = await this.cryptoService.hash(dto.password, this.SALT);

        const newUser: Pick<User, 'email' | 'password'> = { ...dto, password: hashedPassword };

        await this.usersRepository.createOne(newUser);

        return this.signIn(newUser);
    }
}
