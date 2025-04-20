import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const GetOneUploadOutputDtoSchema = z
    .object({
        id: z.number(),
        name: z.string(),
        path: z.string(),
        mimeType: z.string(),
        url: z.string(),
    })
    .strip();

export class GetOneUploadOutputDto extends createZodDto(GetOneUploadOutputDtoSchema) {}
