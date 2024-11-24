import { registerAs } from '@nestjs/config';

import { configKeys } from '../common/constants';
import { TGlobalConfig } from '../common/types';
import { getEnvVar } from '../common/utils';

export const appConfigLoader = registerAs<TGlobalConfig['app']>(configKeys.APP, () => ({
    nodeEnv: getEnvVar('NODE_ENV'),
    appUrl: getEnvVar('APP_URL'),
    port: getEnvVar('PORT'),
}));
