import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app/app.module';
import { ZodValidationPipe } from '~app/pipes';

import { CustomConfigService } from '~modules/core/custom-config';
import { OpenApiService } from '~modules/core/services/open-api';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService: CustomConfigService = app.get(ConfigService);

    const openApiService: OpenApiService = app.get(OpenApiService);

    const PORT: number = configService.get('app').port;

    app.useGlobalPipes(new ZodValidationPipe());

    app.enableCors({
        origin: '*',
    });

    await openApiService.initOpenApi(app);

    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`, `Environment: ${process.env.NODE_ENV}`);
    });
}

bootstrap();
