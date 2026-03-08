import { z } from 'zod';

export const clientNameSchema = z.string().max(250);
