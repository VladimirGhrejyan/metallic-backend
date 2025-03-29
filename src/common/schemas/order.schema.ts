import { z } from 'zod';

import { OrderEnum } from '~common/enums';

export const OrderSchema = z.nativeEnum(OrderEnum);
