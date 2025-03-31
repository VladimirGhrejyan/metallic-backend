import { z } from 'zod';

import { User } from '~orm/entities';

export const passwordSchema = z
    .string()
    .trim()
    .min(1, 'empty string')
    .max(User.PASSWORD_LENGTH, `password should not exceed ${User.PASSWORD_LENGTH} characters`);
