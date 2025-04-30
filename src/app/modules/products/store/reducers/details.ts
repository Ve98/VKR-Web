import { on } from '@ngrx/store';

import * as actions from '../actions/details';
import { ProductState } from './state';

export const DETAILS_REDUCERS = [
  on(actions.loadProduct, (state: ProductState) => ({ ...state, currentProductIsLoading: true, currentProduct: null })),
  on(actions.loadProductSuccess, (state: ProductState, { product }) => ({ ...state, currentProductIsLoading: false, currentProduct: product })),
  on(actions.loadProductFails, (state: ProductState) => ({ ...state, currentProductIsLoading: false })),
]