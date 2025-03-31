import { z } from 'zod';

import { Product } from '~orm/entities';

export const productCodeSchema = z
    .string()
    .trim()
    .min(1)
    .max(Product.CODE_LENGTH, `code should not exceed ${Product.CODE_LENGTH} characters`);
