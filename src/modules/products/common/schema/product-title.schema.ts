import { z } from 'zod';

import { Product } from '~orm/entities';

export const productTitleSchema = z
    .string()
    .trim()
    .min(1)
    .max(Product.TITLE_LENGTH, `title should not exceed ${Product.TITLE_LENGTH} characters`);
