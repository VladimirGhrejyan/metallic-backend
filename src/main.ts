import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app/app.module';
import { ZodValidationPipe } from '~app/pipes';

import { createOpenApiDocument } from '~config/open-api';

import { CustomConfigService } from '~modules/custom-config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService: CustomConfigService = app.get(ConfigService);

    const PORT: number = configService.get('app').port;

    app.useGlobalPipes(new ZodValidationPipe());

    app.enableCors({
        origin: '*',
    });

    await createOpenApiDocument(app);

    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`, `Environment: ${process.env.NODE_ENV}`);
    });
}

bootstrap();
