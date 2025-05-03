import { Module } from '@nestjs/common';

import { CustomConfigModule } from './custom-config';
import { ServeStaticModule } from './serve-static';
import { OpenApiService } from './services/open-api';

@Module({
    providers: [OpenApiService],
    imports: [ServeStaticModule, CustomConfigModule],
    exports: [CustomConfigModule, OpenApiService],
})
export class CoreModule {}
