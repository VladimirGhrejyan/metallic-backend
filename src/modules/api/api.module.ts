import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ZodSerializerInterceptor } from 'nestjs-zod';
import { ExceptionFilter } from '~app/filters';

import { AuthModule } from './auth';
import { JwtGuard } from './auth/guards';
import { JwtStrategy } from './auth/strategy';
import { ProductCategoriesModule } from './product-categories';
import { ProductsModule } from './products';
import { UsersModule } from './users';

@Module({
    imports: [AuthModule, UsersModule, ProductCategoriesModule, ProductsModule],
    providers: [
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
export class ApiModule {}
