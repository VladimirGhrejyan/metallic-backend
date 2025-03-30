import { ConfigModuleOptions } from '@nestjs/config';
import { cwd } from 'node:process';
import * as path from 'path';

import { envSchema } from '../common/schemas';
import { getEnvVar } from '../common/utils';
import {
    appConfigLoader,
    authConfigLoader,
    ormConfigLoader,
    storageConfigLoader,
} from '../config-loaders';

export const configOptions: ConfigModuleOptions = {
    isGlobal: true,
    envFilePath: path.resolve(cwd(), `.env.${getEnvVar('NODE_ENV')}`),
    validate: (env) => envSchema.parse(env),
    validationOptions: { stripUnknown: true },
    load: [appConfigLoader, ormConfigLoader, authConfigLoader, storageConfigLoader],
};
