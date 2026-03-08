import { z } from 'zod';

export const clientPhoneNumberSchema = z.string().min(1).max(20);
