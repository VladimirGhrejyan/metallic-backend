import { Injectable } from '@nestjs/common';
import pick from 'lodash.pick';

@Injectable()
export class UtilsService {
    safePick<T extends object, U extends keyof T>(object: T, key: U | Array<U>): Pick<T, U> {
        return pick(object, key);
    }
}
