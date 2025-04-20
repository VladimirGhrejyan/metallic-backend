import { Module } from '@nestjs/common';

import { CryptoModule } from './crypto';
import { UtilsModule } from './utils';

@Module({ imports: [UtilsModule, CryptoModule], exports: [UtilsModule, CryptoModule] })
export class SharedModule {}
