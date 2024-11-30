import { IBaseEntity } from '~common/interfaces';

export interface IProduct extends IBaseEntity {
    categoryId: number;

    title: string;

    code: string;

    costPrice: number;

    markup: number;
}
