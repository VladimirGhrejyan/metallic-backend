import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { OrderEnum } from '~common/enums';
import { PaginationInputSchema } from '~common/helpers/pagination';
import { OrderSchema } from '~common/schemas';

export const GetAllProductsInputDtoSchema = z
    .object({
        search: z.string().optional(),
        categoryId: z.number().optional(),
        order: OrderSchema.default(OrderEnum.ASC),
        sortBy: z
            .enum(['title', 'code', 'costPrice', 'categoryId', 'createdAt', 'updatedAt'])
            .default('createdAt'),
    })
    .merge(PaginationInputSchema);

export class GetAllProductsInputDto extends createZodDto(GetAllProductsInputDtoSchema) {}
