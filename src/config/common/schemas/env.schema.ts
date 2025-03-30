import { z } from 'zod';

export const envSchema = z.object({
    // APP
    NODE_ENV: z.enum(['development', 'production']),
    APP_URL: z.string().url(),
    PORT: z.string().transform(Number),

    // DATABASE
    POSTGRES_HOST: z.string(),
    POSTGRES_USERNAME: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_PORT: z.string().transform(Number),
    POSTGRES_DB: z.string(),

    // AUTH
    JWT_SECRET: z.string(),
    JWT_ACCESS_EXPIRES_IN: z.string(),

    // STORAGE
    STORAGE_URL: z.string(),
    STORAGE_REGION: z.string(),
    STORAGE_ACCESS_KEY_ID: z.string(),
    STORAGE_SECRET_ACCESS_KEY: z.string(),
    STORAGE_BUCKET_NAME: z.string(),
});
