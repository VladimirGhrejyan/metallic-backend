import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { clientPhoneNameSchema, clientPhoneNumberSchema } from '../schema';

export const CreateClientPhoneSchema = z
    .object({
        phone: clientPhoneNumberSchema,

        name: clientPhoneNameSchema.nullable().optional(),
    })
    .strict();

export class CreateClientPhoneDto extends createZodDto(CreateClientPhoneSchema) {}
