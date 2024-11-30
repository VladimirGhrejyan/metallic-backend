import { IBaseEntity } from '~common/interfaces';

export interface IProductCategory extends IBaseEntity {
    title: string;

    code: string;
}
