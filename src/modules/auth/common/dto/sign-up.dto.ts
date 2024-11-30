import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { TAccessToken } from '~modules/auth/common/types';

import { passwordSchema, usernameSchema } from '~common/schemas';

export const SignUpInputDtoSchema = z
    .object({
        username: usernameSchema,

        password: passwordSchema,
    })
    .required()
    .strict();

export class SignUpInputDto extends createZodDto(SignUpInputDtoSchema) {}

export class SignUpOutputDto implements TAccessToken {
    access_token: string;
}
