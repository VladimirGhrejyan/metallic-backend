export interface IProductSnapshot {
    title: string;

    code: string;
}

export interface IOrderItem {
    orderId: number;

    productId: number | null;

    count: number;

    price: number;

    productSnapshot: IProductSnapshot;
}
