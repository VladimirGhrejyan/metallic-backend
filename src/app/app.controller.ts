import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

import { SkipAuth } from '~modules/api/auth/decorators';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @ApiExcludeEndpoint()
    @SkipAuth()
    @Get('healthcheck')
    getHello(): string {
        return this.appService.getHello();
    }
}
