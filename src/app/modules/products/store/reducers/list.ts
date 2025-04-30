import { on } from '@ngrx/store';

import * as actions from '../actions/list';
import { ProductState } from './state';

export const LIST_REDUCERS = [
    on(actions.loadProducts, (state: ProductState) => ({ ...state, productsIsLoading: true })),
    on(actions.loadProductsSuccess, (state: ProductState, { products }) => ({ ...state, productsIsLoading: false, products })),
    on(actions.loadProductsFails, (state: ProductState) => ({ ...state, productsIsLoading: false })),
]