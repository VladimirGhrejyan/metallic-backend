import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { SignInInputDto, SignInOutputDto, SignUpInputDto, SignUpOutputDto } from './common/dto';
import { TAuthenticatedRequest } from './common/types';
import { LocalAuthGuard } from './guards';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('sign-in')
    @ApiBody({
        type: SignInInputDto,
    })
    @ApiOperation({ operationId: 'signIn' })
    public async signIn(@Request() req: TAuthenticatedRequest): Promise<SignInOutputDto> {
        return this.authService.signIn(req.user);
    }

    @Post('sign-up')
    @ApiOperation({ operationId: 'signUp' })
    public async signUp(@Body() dto: SignUpInputDto): Promise<SignUpOutputDto> {
        return this.authService.signUp(dto);
    }
}
