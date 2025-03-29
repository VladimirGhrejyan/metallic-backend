import { FindManyOptions, ObjectLiteral, Repository } from 'typeorm';

import { IPaginationResult } from '~common/interfaces';

import { TPaginationInput } from './types';

export class PaginationHelper {
    static async paginate<T extends ObjectLiteral>(
        repository: Repository<T>,
        pagination: TPaginationInput,
        options?: FindManyOptions<T>,
    ): Promise<IPaginationResult<T>> {
        const { page, itemsPerPage } = pagination;

        const [items, totalItems] = await repository.findAndCount({
            ...options,
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage,
        });

        return {
            items,
            meta: {
                itemsPerPage,
                totalItems,
                currentPage: page,
                totalPages: Math.ceil(totalItems / itemsPerPage),
            },
        };
    }
}
