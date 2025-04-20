import { Module } from '@nestjs/common';
import { ServeStaticModule as NestServeStaticModule } from '@nestjs/serve-static';

import { buildServeStaticConfig } from './serve-static.config';

@Module({
    imports: [NestServeStaticModule.forRoot(buildServeStaticConfig())],
})
export class ServeStaticModule {}
