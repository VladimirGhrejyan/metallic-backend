import { Module } from '@nestjs/common';

import { DatabaseModule } from './database';
import { PersistentStorageModule } from './persistent-storage';
import { UploadsModule } from './uploads';

@Module({
    imports: [DatabaseModule, PersistentStorageModule, UploadsModule],
    exports: [DatabaseModule, PersistentStorageModule, UploadsModule],
})
export class InfraModule {}
