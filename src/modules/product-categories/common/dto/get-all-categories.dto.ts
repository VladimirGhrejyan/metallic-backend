import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { GetOneCategoryDtoSchema } from './get-one-category.dto';

export const GetAllCategoriesDtoSchema = z.object({
    items: z.array(GetOneCategoryDtoSchema),
});

export class GetAllCategoriesDto extends createZodDto(GetAllCategoriesDtoSchema) {}
