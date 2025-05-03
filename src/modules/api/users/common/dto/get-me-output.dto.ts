import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PositiveIntegerSchema } from '~common/schemas';

export const GetMeOutputDtoSchema = z
    .object({
        id: PositiveIntegerSchema,
        email: z.string(),
    })
    .strip();

export class GetMeOutputDto extends createZodDto(GetMeOutputDtoSchema) {}
