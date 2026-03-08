import { config } from 'dotenv';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { DataSource } from 'typeorm';

import { getOrmConfig } from '~config/config-loaders';

// TODO: update migrations setup
const root = path.resolve(__dirname, '../..');
const envFiles = ['.env.development', '.env.production', '.env'];
for (const file of envFiles) {
    const fullPath = path.join(root, file);
    if (fs.existsSync(fullPath)) {
        config({ path: fullPath });
        break;
    }
}

const datasource = new DataSource({
    ...getOrmConfig(),
    entities: [path.resolve(__dirname, 'entities/**/*.entity{.ts,.js}')],
    migrations: [path.resolve(__dirname, 'migrations/**/*{.ts,.js}')],
});

export default datasource;
