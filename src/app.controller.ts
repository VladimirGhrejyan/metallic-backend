import { Controller, Get } from '@nestjs/common';

import { SkipAuth } from '~modules/auth/decorators';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @SkipAuth()
    @Get('healthcheck')
    getHello(): string {
        return this.appService.getHello();
    }
}
