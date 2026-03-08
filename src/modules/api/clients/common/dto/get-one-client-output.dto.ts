import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { BaseEntitySchema } from '~common/schemas';

const ClientPhoneOutputSchema = z
    .object({
        phone: z.string(),
        name: z.string().nullable(),
    })
    .merge(BaseEntitySchema)
    .strip();

export const GetOneClientOutputDtoSchema = z
    .object({
        name: z.string(),
        address: z.string().nullable(),
        priceAdjustment: z.number(),
        taxpayerRegistrationNumber: z.string().nullable(),
        phones: z.array(ClientPhoneOutputSchema),
    })
    .merge(BaseEntitySchema)
    .strip();

export class GetOneClientOutputDto extends createZodDto(GetOneClientOutputDtoSchema) {}
