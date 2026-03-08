import { z } from 'zod';

export const clientTrnSchema = z.string().min(1).max(20);
