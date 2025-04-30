import { createReducer, on, Action } from '@ngrx/store';

import { SuppliersState, initialState } from './state';
import { LIST_REDUCERS } from './list';
import { DETAILS_REDUCERS } from './details';

import * as actions from '../actions';
export * from './state';

const suppliersReducer = createReducer(
  initialState,

  on(actions.empty, (state: SuppliersState) => ({ ...state })),

  ...LIST_REDUCERS,
  ...DETAILS_REDUCERS
);

export function reducer(state: SuppliersState, action: Action) {
  return suppliersReducer(state, action);
}
