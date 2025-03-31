import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { User } from '~orm/entities';

import { AuthService } from '../auth.service';
import { LOCAL_STRATEGY_KEY } from '../common/constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, LOCAL_STRATEGY_KEY) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
        });
    }

    public async validate(email: User['email'], password: User['password']): Promise<User> {
        const user = await this.authService.validateUser(email, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
