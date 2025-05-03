import { Injectable } from '@nestjs/common';
import pMap from 'p-map';

@Injectable()
export class DataProcessingService {
    constructor() {}

    async processWithConcurrency<T = unknown>(
        items: T[],
        concurrency: number,
        processor: (item: T) => Promise<unknown>,
    ): Promise<void> {
        await pMap(items, processor, { concurrency });
    }
}
