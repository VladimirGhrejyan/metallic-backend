import z from 'zod';

type TParseIntegerSchemaOptions = {
    errorMessage?: string;
    optional?: boolean;
};

export const parseIntegerSchema = (options: TParseIntegerSchemaOptions) => {
    const { errorMessage = 'bad request', optional = false } = options ?? {};

    if (optional) {
        return z
            .string()
            .optional()
            .transform((value) => {
                if (value !== undefined) {
                    const parsed = parseFloat(value);

                    if (isNaN(parsed)) {
                        throw new Error(errorMessage);
                    }

                    return parsed;
                }
            })
            .refine(
                (value) => {
                    return value === undefined || (Number.isInteger(value) && value > 0);
                },
                { message: errorMessage },
            );
    }

    return z
        .string()
        .transform((value) => {
            const parsed = parseFloat(value);

            if (isNaN(parsed)) {
                throw new Error(errorMessage);
            }

            return parsed;
        })
        .refine(
            (value) => {
                return Number.isInteger(value) && value > 0;
            },
            { message: errorMessage },
        );
};
