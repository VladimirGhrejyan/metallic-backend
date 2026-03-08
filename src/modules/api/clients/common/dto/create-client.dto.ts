import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import {
    clientAddressSchema,
    clientNameSchema,
    clientPriceAdjustmentSchema,
    clientTrnSchema,
} from '../schema';
import { CreateClientPhoneSchema } from './create-client-phone.dto';

const CreateClientSchema = z
    .object({
        name: clientNameSchema,

        address: clientAddressSchema.nullable().optional(),

        priceAdjustment: clientPriceAdjustmentSchema.optional(),

        taxpayerRegistrationNumber: clientTrnSchema.nullable().optional(),

        phones: z.array(CreateClientPhoneSchema).optional(),
    })
    .strict();

export class CreateClientDto extends createZodDto(CreateClientSchema) {}
