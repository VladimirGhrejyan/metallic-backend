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

const CreateProductSchema = z
    .object({
        title: productTitleSchema,

        code: productCodeSchema,

        costPrice: productCostPriceSchema,

        markup: productMarkupSchema,

        categoryId: positiveIntegerSchema,

        quantityAvailable: productQuantityAvailableSchema.optional(),

        description: productDescriptionSchema.optional(),
    })
    .strict();

export class CreateProductDto extends createZodDto(CreateProductSchema) {}
