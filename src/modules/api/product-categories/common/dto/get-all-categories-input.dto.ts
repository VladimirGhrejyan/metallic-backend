import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { OrderEnum } from '~common/enums';
import { OrderSchema } from '~common/schemas';

export const GetAllCategoriesInputDtoSchema = z.object({
    search: z.string().optional(),
    order: OrderSchema.default(OrderEnum.DESC),
    sortBy: z.enum(['title', 'code', 'createdAt', 'updatedAt']).default('createdAt'),
});

export class GetAllCategoriesInputDto extends createZodDto(GetAllCategoriesInputDtoSchema) {}
