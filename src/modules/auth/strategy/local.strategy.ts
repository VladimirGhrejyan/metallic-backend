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
            usernameField: 'username',
        });
    }

    public async validate(username: User['username'], password: User['password']): Promise<User> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            console.log('LOOOOOOOOOOOOOOOOOOOOOOOOG');
            throw new UnauthorizedException();
        }

        return user;
    }
}
