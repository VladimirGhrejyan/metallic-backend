import 'dotenv/config';
import * as path from 'node:path';
import { DataSource } from 'typeorm';

import { getOrmConfig } from '~config/config-loaders';

const datasource = new DataSource({
    ...getOrmConfig(),
    entities: [path.resolve(__dirname, 'entities/**/*.entity{.ts,.js}')],
});

export default datasource;
