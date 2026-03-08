import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

import { PaginationMetaSchema } from '~common/helpers/pagination';

import { GetOneClientOutputDtoSchema } from './get-one-client-output.dto';

export const GetAllClientsOutputDtoSchema = z.object({
    items: z.array(GetOneClientOutputDtoSchema),
    meta: PaginationMetaSchema,
});

export class GetAllClientsOutputDto extends createZodDto(GetAllClientsOutputDtoSchema) {}
