import { z } from 'zod';

import { User } from '~orm/entities';

export const usernameSchema = z
    .string()
    .trim()
    .min(1, 'empty string')
    .max(User.USERNAME_LENGTH, `username should not exceed ${User.USERNAME_LENGTH} characters`);
