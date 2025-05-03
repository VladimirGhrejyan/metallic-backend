import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PositiveIntegerSchema } from '~common/schemas';

import {
    productCodeSchema,
    productCostPriceSchema,
    productDescriptionSchema,
    productMarkupSchema,
    productQuantityAvailableSchema,
    productTitleSchema,
} from '../schema';

export const UpdateProductSchema = z
    .object({
        code: productCodeSchema,

        title: productTitleSchema.optional(),

        costPrice: productCostPriceSchema.optional(),

        markup: productMarkupSchema.optional(),

        categoryId: PositiveIntegerSchema.optional(),

        quantityAvailable: productQuantityAvailableSchema.optional(),

        description: productDescriptionSchema.optional(),
    })
    .strict();

export class UpdateProductDto extends createZodDto(UpdateProductSchema) {}
