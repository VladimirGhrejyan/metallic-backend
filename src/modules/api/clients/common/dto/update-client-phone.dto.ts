import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { clientPhoneNameSchema, clientPhoneNumberSchema } from '../schema';

export const UpdateClientPhoneSchema = z
    .object({
        phone: clientPhoneNumberSchema.optional(),

        name: clientPhoneNameSchema.nullable().optional(),
    })
    .strict();

export class UpdateClientPhoneDto extends createZodDto(UpdateClientPhoneSchema) {}
