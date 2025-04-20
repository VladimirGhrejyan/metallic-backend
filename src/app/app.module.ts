import { Module } from '@nestjs/common';

import { ApiModule } from '~modules/api';
import { CoreModule } from '~modules/core';
import { InfraModule } from '~modules/infra';
import { SharedModule } from '~modules/shared';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [CoreModule, InfraModule, SharedModule, ApiModule],

    controllers: [AppController],

    providers: [AppService],
})
export class AppModule {}
