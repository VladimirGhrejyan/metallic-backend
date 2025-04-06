import { z } from 'zod';

export const productQuantityAvailableSchema = z.number().min(0);
