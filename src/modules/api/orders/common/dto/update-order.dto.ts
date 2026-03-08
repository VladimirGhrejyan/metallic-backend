import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PositiveIntegerSchema } from '~common/schemas';

import { CreateOrderItemSchema } from './create-order.dto';

const UpdateOrderSchema = z
    .object({
        clientId: PositiveIntegerSchema.optional(),

        items: z.array(CreateOrderItemSchema).min(1).optional(),
    })
    .strict();

export class UpdateOrderDto extends createZodDto(UpdateOrderSchema) {}
