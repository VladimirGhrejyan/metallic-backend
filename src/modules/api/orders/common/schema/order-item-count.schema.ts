import { z } from 'zod';

export const orderItemCountSchema = z.number().int().positive();
