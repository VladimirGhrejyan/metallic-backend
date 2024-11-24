import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { patchNestJsSwagger } from 'nestjs-zod';
import * as path from 'path';

import { STATIC_DIR_NAME } from '../common/constants';
import {
    APP_TITLE,
    APP_VERSION,
    OPEN_API_FILE_NAME,
    OUTPUT_DIR_NAME,
    SWAGGER_PATH,
} from './open-api.constant';

export const createOpenApiDocument = async (app: INestApplication): Promise<void> => {
    patchNestJsSwagger();

    const config = new DocumentBuilder().setTitle(APP_TITLE).setVersion(APP_VERSION).build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup(SWAGGER_PATH, app, document);

    const outputDir = path.join(process.cwd(), STATIC_DIR_NAME, OUTPUT_DIR_NAME);
    const outputPath = path.join(outputDir, OPEN_API_FILE_NAME);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(document, null, 2));
};
