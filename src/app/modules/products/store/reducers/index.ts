import { createReducer, on, Action } from '@ngrx/store';

import { ProductState, initialState } from './state';
import { LIST_REDUCERS } from './list';
import { DETAILS_REDUCERS } from './details';

import * as actions from '../actions';
export * from './state';

const productsReducer = createReducer(
  initialState,

  on(actions.empty, (state: ProductState) => ({ ...state })),

  ...LIST_REDUCERS,
  ...DETAILS_REDUCERS
);

export function reducer(state: ProductState, action: Action) {
  return productsReducer(state, action);
}
