import { env } from 'node:process';

import { TEnvironment } from '../types';

export const getEnvVar = <Key extends keyof TEnvironment>(key: Key): TEnvironment[Key] => {
    return env[key] as TEnvironment[Key];
};
