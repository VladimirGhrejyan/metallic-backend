import { registerAs } from '@nestjs/config';

import { configKeys } from '~config/common/constants';
import { TGlobalConfig } from '~config/common/types';
import { getEnvVar } from '~config/common/utils';

export const storageConfigLoader = registerAs<TGlobalConfig['storage']>(configKeys.STORAGE, () => ({
    endpoint: getEnvVar('STORAGE_URL'),
    region: getEnvVar('STORAGE_REGION'),
    accessKeyId: getEnvVar('STORAGE_ACCESS_KEY_ID'),
    secretAccessKey: getEnvVar('STORAGE_SECRET_ACCESS_KEY'),
}));
