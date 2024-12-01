import { z } from 'zod';

export const positiveIntegerSchema = z.number().int().positive();
