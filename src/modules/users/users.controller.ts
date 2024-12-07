import { Controller, Get, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { TAuthenticatedRequest } from '~modules/auth/common/types';

import { GetMeOutputDto } from './common/dto';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('me')
    @ApiOperation({ operationId: 'getMe' })
    public async getMe(@Request() { user }: TAuthenticatedRequest): Promise<GetMeOutputDto> {
        return this.usersService.getMe(user.username);
    }
}
