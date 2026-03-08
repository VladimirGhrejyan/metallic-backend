import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { OrderEnum } from '~common/enums';
import { PaginationInputSchema } from '~common/helpers/pagination';
import { OrderSchema, ParseIntegerSchema } from '~common/schemas';

export const GetAllOrdersInputDtoSchema = z
    .object({
        search: z.string().optional(),
        order: OrderSchema.default(OrderEnum.DESC),
        sortBy: z.enum(['createdAt', 'updatedAt']).default('createdAt'),
        clientId: ParseIntegerSchema({
            optional: true,
            errorMessage: 'ClientId should be positive integer',
        }),
    })
    .merge(PaginationInputSchema);

export class GetAllOrdersInputDto extends createZodDto(GetAllOrdersInputDtoSchema) {}
