import { z } from 'zod';

export const productMarkupSchema = z.number().min(0);
