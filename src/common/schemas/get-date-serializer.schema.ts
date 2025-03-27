import { z } from 'zod';

type TOptions = {
    nullable?: boolean;
};

export const getDateSerializerSchema = (options?: TOptions) => {
    const outputSchema = options?.nullable ? z.string().nullable() : z.string();

    return z.preprocess((value) => {
        if (value instanceof Date) {
            return value.toISOString();
        }

        return value;
    }, outputSchema);
};
