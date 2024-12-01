import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { positiveIntegerSchema } from '~common/schemas';

import {
    productCodeSchema,
    productCostPriceSchema,
    productMarkupSchema,
    productTitleSchema,
} from '../schema';

const UpdateProductSchema = z
    .object({
        title: productTitleSchema.optional(),

        code: productCodeSchema.optional(),

        costPrice: productCostPriceSchema.optional(),

        markup: productMarkupSchema.optional(),

        categoryId: positiveIntegerSchema.optional(),
    })
    .required()
    .strict();

export class UpdateProductDto extends createZodDto(UpdateProductSchema) {}
