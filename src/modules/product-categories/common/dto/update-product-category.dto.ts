import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { productCategoryCodeSchema, productCategoryTitleSchema } from '../schema';

export const UpdateProductCategorySchema = z
    .object({
        title: productCategoryTitleSchema.optional(),

        code: productCategoryCodeSchema.optional(),
    })
    .strict();

export class UpdateProductCategoryDto extends createZodDto(UpdateProductCategorySchema) {}
