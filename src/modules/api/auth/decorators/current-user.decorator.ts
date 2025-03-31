import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { TAuthenticatedRequest } from '../common/types';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<TAuthenticatedRequest>();

    return req.user;
});
