import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { productCategoryCodeSchema, productCategoryTitleSchema } from '../schema';

export const CreateProductCategorySchema = z
    .object({
        title: productCategoryTitleSchema,

        code: productCategoryCodeSchema,
    })
    .required()
    .strict();

export class CreateProductCategoryDto extends createZodDto(CreateProductCategorySchema) {}
