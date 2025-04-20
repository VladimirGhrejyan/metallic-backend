import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import process from 'node:process';
import path from 'path';

import { STATIC_DIR_NAME } from '~config/common/constants';

export const buildServeStaticConfig = (): ServeStaticModuleOptions => {
    const rootPath: ServeStaticModuleOptions['rootPath'] = path.join(
        process.cwd(),
        STATIC_DIR_NAME,
    );

    const serveRoot: ServeStaticModuleOptions['serveRoot'] = '/' + STATIC_DIR_NAME;

    return {
        rootPath,
        serveRoot,
    };
};
