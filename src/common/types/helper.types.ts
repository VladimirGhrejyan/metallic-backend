export type PartialExpect<T, K extends keyof T> = Partial<T> & Pick<T, K>;
