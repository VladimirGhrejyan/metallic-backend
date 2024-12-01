import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { positiveIntegerSchema } from '~common/schemas';

import {
    productCodeSchema,
    productCostPriceSchema,
    productMarkupSchema,
    productTitleSchema,
} from '../schema';

const CreateProductSchema = z
    .object({
        title: productTitleSchema,

        code: productCodeSchema,

        costPrice: productCostPriceSchema,

        markup: productMarkupSchema,

        categoryId: positiveIntegerSchema,
    })
    .required()
    .strict();

export class CreateProductDto extends createZodDto(CreateProductSchema) {}
