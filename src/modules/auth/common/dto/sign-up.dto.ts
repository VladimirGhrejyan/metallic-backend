import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { TAccessToken } from '~modules/auth/common/types';

import { emailSchema, passwordSchema } from '../schema';

const SignUpInputDtoSchema = z
    .object({
        email: emailSchema,

        password: passwordSchema,
    })
    .required()
    .strict();

export class SignUpInputDto extends createZodDto(SignUpInputDtoSchema) {}

export class SignUpOutputDto implements TAccessToken {
    access_token: string;
}
