import z from 'zod';

export const PaginationInputSchema = z.object({
    page: z
        .string()
        .optional()
        .default('1')
        .transform((val) => {
            const parsed = parseInt(val, 10);
            return isNaN(parsed) ? 1 : parsed;
        })
        .refine((val) => val >= 1, {
            message: 'Page must be greater than or equal to 1',
        }),

    itemsPerPage: z
        .string()
        .optional()
        .default('10')
        .transform((val) => {
            const parsed = parseInt(val, 10);
            return isNaN(parsed) ? 10 : Math.min(Math.max(parsed, 1), 100);
        })
        .refine((val) => val >= 1 && val <= 100, {
            message: 'Items per page must be between 1 and 100',
        }),
});
