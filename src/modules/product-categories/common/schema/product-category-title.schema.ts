import { z } from 'zod';

import { ProductCategory } from '~orm/entities';

export const productCategoryTitleSchema = z
    .string()
    .trim()
    .min(1)
    .max(
        ProductCategory.TITLE_LENGTH,
        `title should not exceed ${ProductCategory.TITLE_LENGTH} characters`,
    );
