import { TGlobalConfig } from '../types';

export const configKeys: Record<string, keyof TGlobalConfig> = {
    APP: 'app',
    AUTH: 'auth',
    ORM: 'orm',
    STORAGE: 'storage',
} as const;
