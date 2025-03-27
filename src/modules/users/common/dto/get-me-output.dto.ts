import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { positiveIntegerSchema } from '~common/schemas';

export const GetMeOutputDtoSchema = z
    .object({
        id: positiveIntegerSchema,
        email: z.string(),
    })
    .strip();

export class GetMeOutputDto extends createZodDto(GetMeOutputDtoSchema) {}
