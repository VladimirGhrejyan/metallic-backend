import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

import { IS_PUBLIC_KEY, JWT_STRATEGY_KEY } from '../common/constants';

@Injectable()
export class JwtGuard extends AuthGuard(JWT_STRATEGY_KEY) {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext): Promise<boolean> | boolean | Observable<boolean> {
        const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        return super.canActivate(context);
    }
}
