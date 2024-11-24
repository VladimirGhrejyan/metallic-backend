import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { CustomConfigService } from '~modules/custom-config';
import { UsersModule } from '~modules/users';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy, LocalStrategy } from './strategy';

@Module({
    imports: [
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
