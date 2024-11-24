import { IBaseEntity } from '~common/interfaces';

export interface IUser extends IBaseEntity {
    username: string;

    password: string;
}
