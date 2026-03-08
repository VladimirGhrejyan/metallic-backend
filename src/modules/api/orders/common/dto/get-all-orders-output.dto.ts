import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PaginationMetaSchema } from '~common/helpers/pagination';

import { GetOneOrderOutputDtoSchema } from './get-one-order-output.dto';

export const GetAllOrdersOutputDtoSchema = z.object({
    items: z.array(GetOneOrderOutputDtoSchema),
    meta: PaginationMetaSchema,
});

export class GetAllOrdersOutputDto extends createZodDto(GetAllOrdersOutputDtoSchema) {}
