import { ApiBodyOptions } from '@nestjs/swagger';

export const IMAGE_KEY: string = 'image';

export const UPDATE_ONE_IMAGE_API_BODY = {
    schema: {
        type: 'object',
        properties: {
            [IMAGE_KEY]: {
                type: 'string',
                format: 'binary',
            },
        },
    },
} satisfies ApiBodyOptions;
