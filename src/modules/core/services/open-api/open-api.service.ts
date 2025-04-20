import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { patchNestJsSwagger } from 'nestjs-zod';
import * as path from 'path';

import { STATIC_DIR_NAME } from '~config/common/constants';

@Injectable()
export class OpenApiService {
    public readonly APP_TITLE: string = 'Tools-Zone';

    public readonly APP_VERSION: string = '1';

    public readonly SWAGGER_PATH: string = 'api-docs';

    public readonly OUTPUT_DIR_NAME: string = 'openapi';

    public readonly OPEN_API_FILE_NAME: string = 'openapi.json';

    public async initOpenApi(app: INestApplication) {
        const document = this.setupSwagger(app);

        await this.createOpenApiDocument(document);
    }

    private setupSwagger(app: INestApplication): OpenAPIObject {
        patchNestJsSwagger();

        const config = new DocumentBuilder()
            .setTitle(this.APP_TITLE)
            .setVersion(this.APP_VERSION)
            .addBearerAuth()
            .build();

        const document = SwaggerModule.createDocument(app, config);

        SwaggerModule.setup(this.SWAGGER_PATH, app, document);

        return document;
    }

    private async createOpenApiDocument(document: OpenAPIObject): Promise<void> {
        const outputDir = path.join(process.cwd(), STATIC_DIR_NAME, this.OUTPUT_DIR_NAME);
        const outputPath = path.join(outputDir, this.OPEN_API_FILE_NAME);

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, JSON.stringify(document, null, 2));
    }
}
