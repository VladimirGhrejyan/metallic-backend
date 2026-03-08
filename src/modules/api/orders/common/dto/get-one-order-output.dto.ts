import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { BaseEntitySchema } from '~common/schemas';

const ProductSnapshotSchema = z
    .object({
        title: z.string(),
        code: z.string(),
    })
    .strip();

const OrderItemProductSchema = z
    .object({
        id: z.number(),
        title: z.string(),
        code: z.string(),
    })
    .strip();

const OrderItemOutputSchema = z
    .object({
        orderId: z.number(),
        productId: z.number().nullable(),
        count: z.number(),
        price: z.number(),
        productSnapshot: ProductSnapshotSchema,
        product: OrderItemProductSchema.nullable(),
    })
    .merge(BaseEntitySchema)
    .strip();

const OrderClientSchema = z
    .object({
        id: z.number(),
        name: z.string(),
        taxpayerRegistrationNumber: z.string().nullable(),
    })
    .strip();

export const GetOneOrderOutputDtoSchema = z
    .object({
        clientId: z.number(),
        client: OrderClientSchema,
        items: z.array(OrderItemOutputSchema),
    })
    .merge(BaseEntitySchema)
    .strip();

export class GetOneOrderOutputDto extends createZodDto(GetOneOrderOutputDtoSchema) {}
