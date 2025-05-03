import { Module } from '@nestjs/common';

import { CryptoModule } from './crypto';
import { UtilsModule, UtilsService } from './utils';
import { XlsxModule } from './xlsx';

@Module({
    imports: [UtilsModule, CryptoModule, XlsxModule],
    exports: [UtilsModule, CryptoModule, XlsxModule],
    providers: [UtilsService],
})
export class SharedModule {}
