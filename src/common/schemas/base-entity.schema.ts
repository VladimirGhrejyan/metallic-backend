import { z } from 'zod';

import { getDateSerializerSchema } from './get-date-serializer.schema';
import { positiveIntegerSchema } from './positive-integer.schema';

export const baseEntitySchema = z.object({
    id: positiveIntegerSchema,
    createdAt: getDateSerializerSchema(),
    updatedAt: getDateSerializerSchema({ nullable: true }),
    deletedAt: getDateSerializerSchema({ nullable: true }),
});
