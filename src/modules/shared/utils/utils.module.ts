import { Global, Module } from '@nestjs/common';

import { DataProcessingService } from './data-processing.service';
import { UtilsService } from './utils.service';

@Global()
@Module({
    providers: [UtilsService, DataProcessingService],
    exports: [UtilsService, DataProcessingService],
})
export class UtilsModule {}
