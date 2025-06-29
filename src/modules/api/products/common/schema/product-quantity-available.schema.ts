import { z } from 'zod';

export const productQuantityAvailableSchema = z.number().int().min(0);
