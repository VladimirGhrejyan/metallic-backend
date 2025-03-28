import { ApiQuery } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { ZodRawShape, z } from 'zod';

export function ZodApiQuery<T extends ZodRawShape>(schema: z.ZodObject<T>) {
    return function <U extends object, M extends (query: z.infer<typeof schema>) => unknown>(
        target: U,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<M>,
    ) {
        Object.entries(schema.shape).forEach(([key, value]) => {
            const openAPISchema = zodToOpenAPI(value);
            ApiQuery({ name: key, required: !value.isOptional(), schema: openAPISchema })(
                target,
                propertyKey,
                descriptor,
            );
        });
    };
}
