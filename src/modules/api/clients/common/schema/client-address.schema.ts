import { z } from 'zod';

export const clientAddressSchema = z.string().max(500);
