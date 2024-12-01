import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { passwordSchema, usernameSchema } from '../schema';
import { TAccessToken } from '../types';

const SignInInputDtoSchema = z
    .object({
        username: usernameSchema,

        password: passwordSchema,
    })
    .required()
    .strict();

export class SignInInputDto extends createZodDto(SignInInputDtoSchema) {}

export class SignInOutputDto implements TAccessToken {
    access_token: string;
}
