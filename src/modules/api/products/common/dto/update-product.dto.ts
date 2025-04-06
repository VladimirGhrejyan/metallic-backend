import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { positiveIntegerSchema } from '~common/schemas';

import {
    productCodeSchema,
    productCostPriceSchema,
    productDescriptionSchema,
    productMarkupSchema,
    productQuantityAvailableSchema,
    productTitleSchema,
} from '../schema';

const UpdateProductSchema = z
    .object({
        title: productTitleSchema.optional(),

        code: productCodeSchema.optional(),

        costPrice: productCostPriceSchema.optional(),

        markup: productMarkupSchema.optional(),

        categoryId: positiveIntegerSchema.optional(),

        quantityAvailable: productQuantityAvailableSchema.optional(),

        description: productDescriptionSchema.optional(),
    })
    .strict();

export class UpdateProductDto extends createZodDto(UpdateProductSchema) {}
