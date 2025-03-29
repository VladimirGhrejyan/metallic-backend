type TRoute = {
    PATH: string;
    OPERATION_ID: string;
    PARAMS?: Record<string, string>;
};

export interface IApiMetadata {
    ROUTES: Record<string, TRoute>;

    TAGS: Array<string>;

    PREFIX: string;
}
