import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TEnvironment } from './env.types';

type AppConfig = {
    nodeEnv: TEnvironment['NODE_ENV'];
    port: TEnvironment['PORT'];
    appUrl: TEnvironment['APP_URL'];
};

type AuthConfig = {
    jwtSecret: TEnvironment['JWT_SECRET'];
    jwtExpiresIn: TEnvironment['JWT_ACCESS_EXPIRES_IN'];
};

type StorageConfig = {
    endpoint: TEnvironment['STORAGE_URL'];
    region: TEnvironment['STORAGE_REGION'];
    accessKeyId: TEnvironment['STORAGE_ACCESS_KEY_ID'];
    secretAccessKey: TEnvironment['STORAGE_SECRET_ACCESS_KEY'];
};

export type TGlobalConfig = {
    orm: TypeOrmModuleOptions;
    app: AppConfig;
    auth: AuthConfig;
    storage: StorageConfig;
};
