import { ProductModel } from '../../../product';

export interface ProductsState {
    data: Array<ProductModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
    data: [],
    loading: false,
    loaded: false,
    error: null
};
