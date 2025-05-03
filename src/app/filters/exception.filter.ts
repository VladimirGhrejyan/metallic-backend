import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ZodSerializationException } from 'nestjs-zod';

@Catch(HttpException)
export class ExceptionFilter extends BaseExceptionFilter {
    private readonly logger = new Logger(ExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception, 'EXCEPTION');

        if (exception instanceof ZodSerializationException) {
            const zodError = exception.getZodError();
            this.logger.error(`ZodSerializationException: ${zodError.message}`);
        }

        super.catch(exception, host);
    }
}
