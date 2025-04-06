import { z } from 'zod';

import { Product } from '~orm/entities';

export const productDescriptionSchema = z
    .string()
    .trim()
    .max(
        Product.DESCRIPTION_LENGTH,
        `description should not exceed ${Product.DESCRIPTION_LENGTH} characters`,
    );
