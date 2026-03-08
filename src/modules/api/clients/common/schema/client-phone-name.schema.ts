import { z } from 'zod';

export const clientPhoneNameSchema = z.string().max(250);
