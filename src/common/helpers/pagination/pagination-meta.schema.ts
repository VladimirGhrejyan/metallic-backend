import { z } from 'zod';

const nonNegativeIntegerSchema = z.number().nonnegative().int();

export const PaginationMetaSchema = z.object({
    totalItems: nonNegativeIntegerSchema,
    totalPages: nonNegativeIntegerSchema,
    currentPage: nonNegativeIntegerSchema,
    itemsPerPage: nonNegativeIntegerSchema,
});
