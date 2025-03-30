import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { baseEntitySchema } from '~common/schemas';

import { productCategoryCodeSchema, productCategoryTitleSchema } from '../schema';

export const GetOneCategoryDtoSchema = z
    .object({
        title: productCategoryTitleSchema,
        code: productCategoryCodeSchema,
    })
    .merge(baseEntitySchema)
    .strip();

export class GetOneCategoryDto extends createZodDto(GetOneCategoryDtoSchema) {}
