import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { CustomConfigService } from '~modules/core/custom-config';

import { JWT_STRATEGY_KEY } from '../common/constants';
import { TAccessTokenPayload } from '../common/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY_KEY) {
    constructor(private readonly configService: CustomConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('auth').jwtSecret,
        });
    }

    public async validate(payload: TAccessTokenPayload) {
        return payload;
    }
}
