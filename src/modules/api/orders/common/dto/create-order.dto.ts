import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PositiveIntegerSchema } from '~common/schemas';

import { orderItemCountSchema } from '../schema';

const CreateOrderItemSchema = z
    .object({
        productId: PositiveIntegerSchema,

        count: orderItemCountSchema,
    })
    .strict();

export { CreateOrderItemSchema };

const CreateOrderSchema = z
    .object({
        clientId: PositiveIntegerSchema,

        items: z.array(CreateOrderItemSchema).min(1),
    })
    .strict();

export class CreateOrderDto extends createZodDto(CreateOrderSchema) {}
