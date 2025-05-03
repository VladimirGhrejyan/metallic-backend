import { ApiBodyOptions } from '@nestjs/swagger';

export const FILE_KEY = 'file';

export const UPDATE_MANY_API_BODY = {
    schema: {
        type: 'object',
        properties: {
            [FILE_KEY]: {
                type: 'string',
                format: 'binary',
            },
        },
    },
} satisfies ApiBodyOptions;
