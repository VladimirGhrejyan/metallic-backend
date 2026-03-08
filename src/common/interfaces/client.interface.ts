export interface IClient {
    name: string;

    address: string | null;

    priceAdjustment: number;

    taxpayerRegistrationNumber: string | null;
}
