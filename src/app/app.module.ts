import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as process from 'node:process';
import * as path from 'path';

import { STATIC_DIR_NAME } from '~config/common/constants';

import { ApiModule } from '~modules/api';
import { CryptoModule } from '~modules/crypto';
import { CustomConfigModule } from '~modules/custom-config';
import { DatabaseModule } from '~modules/database';
import { PersistentStorageModule } from '~modules/persistent-storage';
import { UtilsModule } from '~modules/utils';

import { AppController } from './app.controller';
import { AppService } from './app.service';

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

        PersistentStorageModule,

        ApiModule,
    ],

    controllers: [AppController],

    providers: [AppService],
})
export class AppModule {}
