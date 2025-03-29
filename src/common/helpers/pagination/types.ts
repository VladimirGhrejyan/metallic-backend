import { z } from 'zod';

import { PaginationInputSchema } from './pagination-input.schema';
import { PaginationMetaSchema } from './pagination-meta.schema';

export type TPaginationInput = z.infer<typeof PaginationInputSchema>;

export type TPaginationMeta = z.infer<typeof PaginationMetaSchema>;
