import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import { GetMeOutputDto, GetMeOutputDtoSchema } from './common/dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async getMe(username: string): Promise<GetMeOutputDto> {
        const user = await this.usersRepository.getOne(username);

        const result = GetMeOutputDtoSchema.safeParse(user);

        if (!result.data) {
            throw new UnprocessableEntityException('User data validation failed');
        }

        return result.data;
    }
}
