import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { GetOneUploadOutputDtoSchema } from '~modules/infra/uploads';

import { baseEntitySchema } from '~common/schemas';

export const GetOneProductOutputDtoSchema = z
    .object({
        title: z.string(),
        code: z.string(),
        costPrice: z.number(),
        markup: z.number(),
        categoryId: z.number(),
        quantityAvailable: z.number(),
        description: z.string().nullable(),
        image: GetOneUploadOutputDtoSchema.nullable(),
    })
    .merge(baseEntitySchema)
    .strip();

export class GetOneProductOutputDto extends createZodDto(GetOneProductOutputDtoSchema) {}
