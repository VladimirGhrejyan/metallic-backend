import { z } from 'zod';

import { baseEntitySchema } from '~common/schemas';

export const GetOneProductOutputDtoSchema = z
    .object({
        title: z.string(),
        code: z.string(),
        costPrice: z.number(),
        markup: z.number(),
        categoryId: z.number(),
    })
    .merge(baseEntitySchema)
    .strip();
