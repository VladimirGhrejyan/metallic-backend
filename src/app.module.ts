import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '~modules/auth';
import { JwtGuard } from '~modules/auth/guards';
import { JwtStrategy } from '~modules/auth/strategy';
import { CustomConfigModule, CustomConfigService } from '~modules/custom-config';
import { UsersModule } from '~modules/users';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        CustomConfigModule,
        TypeOrmModule.forRootAsync({
            inject: [CustomConfigService],
            useFactory(configService: CustomConfigService) {
                return configService.get('orm');
            },
        }),

        AuthModule,
        UsersModule,
    ],

    controllers: [AppController],

    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: JwtGuard,
        },
        JwtStrategy,
    ],
})
export class AppModule {}
