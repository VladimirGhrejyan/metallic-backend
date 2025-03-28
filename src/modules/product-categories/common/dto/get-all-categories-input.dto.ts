import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const GetAllCategoriesInputDtoSchema = z.object({
    search: z.string().optional(),
});

export class GetAllCategoriesInputDto extends createZodDto(GetAllCategoriesInputDtoSchema) {}
