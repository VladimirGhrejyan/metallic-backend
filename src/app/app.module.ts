import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ZodSerializerInterceptor } from 'nestjs-zod';
import * as process from 'node:process';
import * as path from 'path';

import { STATIC_DIR_NAME } from '~config/common/constants';

import { AuthModule } from '~modules/auth';
import { JwtGuard } from '~modules/auth/guards';
import { JwtStrategy } from '~modules/auth/strategy';
import { CryptoModule } from '~modules/crypto';
import { CustomConfigModule } from '~modules/custom-config';
import { DatabaseModule } from '~modules/database';
import { ProductCategoriesModule } from '~modules/product-categories';
import { ProductsModule } from '~modules/products';
import { UsersModule } from '~modules/users';
import { UtilsModule } from '~modules/utils';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExceptionFilter } from './filters';

@Module({
    imports: [
        CustomConfigModule,

        UtilsModule,

        CryptoModule,

        ServeStaticModule.forRoot({
            rootPath: path.join(process.cwd(), STATIC_DIR_NAME),
            serveRoot: '/' + STATIC_DIR_NAME,
        }),

        DatabaseModule,

        AuthModule,

        UsersModule,

        ProductCategoriesModule,

        ProductsModule,
    ],

    controllers: [AppController],

    providers: [
        AppService,

        {
            provide: APP_GUARD,
            useClass: JwtGuard,
        },

        JwtStrategy,

        {
            provide: APP_INTERCEPTOR,
            useClass: ZodSerializerInterceptor,
        },

        {
            provide: APP_FILTER,
            useClass: ExceptionFilter,
        },
    ],
})
export class AppModule {}
