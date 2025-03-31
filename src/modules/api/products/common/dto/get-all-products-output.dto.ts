import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PaginationMetaSchema } from '~common/helpers/pagination';

import { GetOneProductOutputDtoSchema } from './get-one-product-output.dto';

export const GetAllProductsOutputDtoSchema = z.object({
    items: z.array(GetOneProductOutputDtoSchema),
    meta: PaginationMetaSchema,
});

export class GetAllProductsOutputDto extends createZodDto(GetAllProductsOutputDtoSchema) {}
