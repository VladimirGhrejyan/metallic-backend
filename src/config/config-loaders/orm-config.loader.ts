import { registerAs } from '@nestjs/config';
import * as path from 'node:path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { configKeys } from '../common/constants';
import { TGlobalConfig } from '../common/types';
import { getEnvVar } from '../common/utils';

export const getOrmConfig = (): PostgresConnectionOptions => ({
    type: 'postgres',
    port: getEnvVar('POSTGRES_PORT'),
    host: getEnvVar('POSTGRES_HOST'),
    username: getEnvVar('POSTGRES_USERNAME'),
    password: getEnvVar('POSTGRES_PASSWORD'),
    database: getEnvVar('POSTGRES_DB'),
    entities: [path.resolve(__dirname, '../../orm/entities/**/*.entity.*{.ts,.js}')],
    namingStrategy: new SnakeNamingStrategy(),
    useUTC: true,
    synchronize: true,
});

export const ormConfigLoader = registerAs<TGlobalConfig['orm']>(configKeys.ORM, () => ({
    ...getOrmConfig(),
    autoLoadEntities: true,
}));
