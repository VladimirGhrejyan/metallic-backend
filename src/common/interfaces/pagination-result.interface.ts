import { TPaginationMeta } from '~common/helpers/pagination';

export interface IPaginationResult<T> {
    items: T[];
    meta: TPaginationMeta;
}
