import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { User } from '~orm/entities';

import { TAccessToken } from '~modules/auth/common/types';

export const SignUpInputDtoSchema = z
    .object({
        username: z
            .string()
            .trim()
            .min(1, 'empty string')
            .max(
                User.USERNAME_LENGTH,
                `username should not exceed ${User.USERNAME_LENGTH} characters`,
            ),

        password: z
            .string()
            .trim()
            .min(1, 'empty string')
            .max(
                User.PASSWORD_LENGTH,
                `password should not exceed ${User.PASSWORD_LENGTH} characters`,
            ),
    })
    .required();

export class SignUpInputDto extends createZodDto(SignUpInputDtoSchema) {}

export class SignUpOutputDto implements TAccessToken {
    access_token: string;
}
