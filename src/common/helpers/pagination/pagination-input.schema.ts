import z from 'zod';

export const PaginationInputSchema = z.object({
    page: z.number().int().min(1).optional().default(1),
    itemsPerPage: z.number().int().min(1).max(100).default(10),
});
