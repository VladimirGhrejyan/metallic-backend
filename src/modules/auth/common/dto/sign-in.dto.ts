import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { User } from '~orm/entities';

import { TAccessToken } from '../types';

export const SignInInputDtoSchema = z
    .object({
        username: z
            .string()
            .min(1, 'empty string')
            .max(
                User.USERNAME_LENGTH,
                `username should not exceed ${User.USERNAME_LENGTH} characters`,
            ),

        password: z
            .string()
            .max(
                User.PASSWORD_LENGTH,
                `password should not exceed ${User.PASSWORD_LENGTH} characters`,
            ),
    })
    .required();

export class SignInInputDto extends createZodDto(SignInInputDtoSchema) {}

export class SignInOutputDto implements TAccessToken {
    access_token: string;
}
