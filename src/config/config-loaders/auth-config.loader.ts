import { registerAs } from '@nestjs/config';

import { configKeys } from '../common/constants';
import { TGlobalConfig } from '../common/types';
import { getEnvVar } from '../common/utils';

export const authConfigLoader = registerAs<TGlobalConfig['auth']>(configKeys.AUTH, () => ({
    jwtSecret: getEnvVar('JWT_SECRET'),
    jwtExpiresIn: getEnvVar('JWT_ACCESS_EXPIRES_IN'),
}));
