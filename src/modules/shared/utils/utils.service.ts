import { Injectable } from '@nestjs/common';
import lodash from 'lodash';

@Injectable()
export class UtilsService {
    safePick<T extends object, U extends keyof T>(object: T, key: U | Array<U>): Pick<T, U> {
        return lodash.pick(object, key);
    }

    first<T = unknown>(array: ArrayLike<T>): T | null {
        const firstItem = lodash.first(array);

        return firstItem ?? null;
    }

    isNil<T>(value: T | null | undefined): value is null | undefined {
        return lodash.isNil(value);
    }

    intersection<T = unknown>(...arrays: Array<Array<T>>): Array<T> {
        return lodash.intersection(...arrays);
    }

    isEmptyObject<T extends object>(value: T) {
        return lodash.isEmpty(value);
    }

    chunk<T = unknown>(value: Array<T>): Array<Array<T>> {
        return lodash.chunk(value);
    }

    keyBy<T extends object>(value: T[], key: keyof T) {
        return lodash.keyBy(value, key);
    }

    mapAndFilterNonNil<T, K extends NonNullable<unknown>>(
        value: Array<T>,
        mapper: (value: T) => K | null | undefined,
    ): Array<NonNullable<K>> {
        const result: NonNullable<K>[] = [];

        value.forEach((item) => {
            const mapped = mapper(item);

            if (!this.isNil(mapped)) {
                result.push(mapped);
            }
        });

        return result;
    }
}
