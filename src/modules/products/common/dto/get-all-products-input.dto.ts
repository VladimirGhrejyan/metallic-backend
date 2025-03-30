import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { OrderEnum } from '~common/enums';
import { PaginationInputSchema } from '~common/helpers/pagination';
import { OrderSchema, parseIntegerSchema } from '~common/schemas';

export const GetAllProductsInputDtoSchema = z
    .object({
        search: z.string().optional(),
        order: OrderSchema.default(OrderEnum.DESC),
        sortBy: z
            .enum(['title', 'code', 'costPrice', 'categoryId', 'createdAt', 'updatedAt'])
            .default('createdAt'),
        categoryId: parseIntegerSchema({
            optional: true,
            errorMessage: 'CategoryId should be positive integer',
        }),
    })
    .merge(PaginationInputSchema);

export class GetAllProductsInputDto extends createZodDto(GetAllProductsInputDtoSchema) {}
