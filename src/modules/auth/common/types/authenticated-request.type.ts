import { Request } from 'express';

import { User } from '~orm/entities';

export type TAuthenticatedRequest = Request & { user: Pick<User, 'username' | 'password'> };
