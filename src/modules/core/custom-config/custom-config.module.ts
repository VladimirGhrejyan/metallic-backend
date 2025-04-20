import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { configOptions } from '~config/config-options';

import { CustomConfigService } from './custom-config.service';

@Global()
@Module({
    imports: [ConfigModule.forRoot(configOptions)],
    providers: [ConfigService, CustomConfigService],
    exports: [CustomConfigService],
})
export class CustomConfigModule {}
