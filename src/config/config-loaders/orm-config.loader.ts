import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { configKeys } from '../common/constants';
import { TGlobalConfig } from '../common/types';
import { getEnvVar } from '../common/utils';

export const ormConfigLoader = registerAs<TGlobalConfig['orm']>(configKeys.ORM, () => ({
    type: 'postgres',
    port: getEnvVar('POSTGRES_PORT'),
    host: getEnvVar('POSTGRES_HOST'),
    username: getEnvVar('POSTGRES_USERNAME'),
    password: getEnvVar('POSTGRES_PASSWORD'),
    database: getEnvVar('POSTGRES_DB'),
    entities: [__dirname + '/../orm/entities/**/*.entity{.ts}'],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true,
    autoLoadEntities: true,
}));
