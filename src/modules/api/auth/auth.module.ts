import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from '~modules/api/users';
import { CryptoModule } from '~modules/crypto';
import { CustomConfigService } from '~modules/custom-config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy, LocalStrategy } from './strategy';

@Module({
    imports: [
        CryptoModule,
        UsersModule,
        JwtModule.registerAsync({
            inject: [CustomConfigService],
            useFactory(configService: CustomConfigService) {
                const { jwtExpiresIn: expiresIn, jwtSecret: secret } = configService.get('auth');

                return {
                    secret,
                    signOptions: {
                        expiresIn,
                    },
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService, JwtModule],
})
export class AuthModule {}
