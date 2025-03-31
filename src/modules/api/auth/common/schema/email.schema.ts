import { z } from 'zod';

import { User } from '~orm/entities';

export const emailSchema = z
    .string()
    .trim()
    .min(1, 'empty string')
    .max(User.EMAIL_LENGTH, `email should not exceed ${User.EMAIL_LENGTH} characters`);
