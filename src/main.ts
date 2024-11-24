import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

import { createOpenApiDocument } from '~config/open-api';

import { CustomConfigService } from '~modules/custom-config/custom-config.service';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService: CustomConfigService = app.get(ConfigService);

    const PORT: number = configService.get('app').port;

    console.log(PORT, 'PORT!!!!!!!!!!!!');

    app.useGlobalPipes(new ZodValidationPipe());

    await createOpenApiDocument(app);

    await app.listen(PORT, () => {
        console.log(
            `Server started on port ${PORT ?? '3000'}`,
            '-----',
            `Environment: ${process.env.NODE_ENV}`,
        );
    });
}

bootstrap();
