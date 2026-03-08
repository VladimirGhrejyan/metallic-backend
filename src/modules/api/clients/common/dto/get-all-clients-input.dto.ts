import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { OrderEnum } from '~common/enums';
import { PaginationInputSchema } from '~common/helpers/pagination';
import { OrderSchema } from '~common/schemas';

export const GetAllClientsInputDtoSchema = z
    .object({
        search: z.string().optional(),
        order: OrderSchema.default(OrderEnum.DESC),
        sortBy: z
            .enum(['name', 'taxpayerRegistrationNumber', 'createdAt', 'updatedAt'])
            .default('createdAt'),
    })
    .merge(PaginationInputSchema);

export class GetAllClientsInputDto extends createZodDto(GetAllClientsInputDtoSchema) {}
