import { z } from 'zod';

import { ProductCategory } from '~orm/entities';

export const productCategoryCodeSchema = z
    .string()
    .trim()
    .min(1)
    .max(
        ProductCategory.CODE_LENGTH,
        `code should not exceed ${ProductCategory.CODE_LENGTH} characters`,
    );
