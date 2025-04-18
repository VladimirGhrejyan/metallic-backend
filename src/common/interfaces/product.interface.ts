export interface IProduct {
    categoryId: number;

    title: string;

    code: string;

    costPrice: number;

    markup: number;

    quantityAvailable: number;

    description: string | null;
}
