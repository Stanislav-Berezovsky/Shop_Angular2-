import { initialProductsState, ProductsState } from './products.state';
import { ProductsActionTypes, ProductsActions } from './products.actions';
import { ProductModel } from '../../../product';

export function productsReducer(state = initialProductsState, action: ProductsActions): ProductsState {
    console.log(`Reducer: Action came in! ${action.type}`);

    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS: {
            return {
                ...state,
                loading: true
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
            const data = [...<Array<ProductModel>>action.payload];
            return {
                ...state,
                data,
                loading: false,
                loaded: true
            };
        }

        case ProductsActionTypes.GET_PRODUCTS_ERROR: {
            const error = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }

        case ProductsActionTypes.CREATE_PRODUCT:
        case ProductsActionTypes.UPDATE_PRODUCT:
        case ProductsActionTypes.DELETE_PRODUCT: {
            return {
                ...state
            };
        }

        case ProductsActionTypes.CREATE_PRODUCT_SUCCESS:
        case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
            const product = <ProductModel>action.payload;
            const data = [...state.data];

            const index = data.findIndex(t => t.id === product.id);

            if (index !== -1) {
                data[index] = product;
            } else {
                data.push(product);
            }

            return {
                ...state,
                data
            };
        }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
        const product = { ...<ProductModel>action.payload };
        const data = state.data.filter(p => p.id !== product.id);

        return {
          ...state,
          data
        };
      }

        case ProductsActionTypes.CREATE_PRODUCT_ERROR:
        case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
        case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
            const error = action.payload;
            return {
                ...state,
                error
            };
        }

        default: {
            console.log('UNKNOWN_PRODUCT action being handled!');
            return state;
        }
    }
}
