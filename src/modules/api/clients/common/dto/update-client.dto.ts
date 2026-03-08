import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import {
    clientAddressSchema,
    clientNameSchema,
    clientPriceAdjustmentSchema,
    clientTrnSchema,
} from '../schema';

const UpdateClientSchema = z
    .object({
        name: clientNameSchema.optional(),

        address: clientAddressSchema.nullable().optional(),

        priceAdjustment: clientPriceAdjustmentSchema.optional(),

        taxpayerRegistrationNumber: clientTrnSchema.nullable().optional(),
    })
    .strict();

export class UpdateClientDto extends createZodDto(UpdateClientSchema) {}
