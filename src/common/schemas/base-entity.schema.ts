import { z } from 'zod';

import { getDateSerializerSchema } from './get-date-serializer.schema';
import { PositiveIntegerSchema } from './positive-integer.schema';

export const BaseEntitySchema = z.object({
    id: PositiveIntegerSchema,
    createdAt: getDateSerializerSchema(),
    updatedAt: getDateSerializerSchema({ nullable: true }),
    deletedAt: getDateSerializerSchema({ nullable: true }),
});
