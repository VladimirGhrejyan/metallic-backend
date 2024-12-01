import { z } from 'zod';

export const productCostPriceSchema = z.number().min(0);
