import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const GetMeOutputDtoSchema = z
    .object({
        id: z.number(),
        email: z.string(),
    })
    .strip();

export class GetMeOutputDto extends createZodDto(GetMeOutputDtoSchema) {}
