import { createReducer, on, Action } from '@ngrx/store';

import { OfferState, initialState } from './state';
import { LIST_REDUCERS } from './list';
import { DETAILS_REDUCERS } from './details';

import * as actions from '../actions';
export * from './state';

const offersReducer = createReducer(
  initialState,

  on(actions.empty, (state: OfferState) => ({ ...state })),

  ...LIST_REDUCERS,
  ...DETAILS_REDUCERS
);

export function reducer(state: OfferState, action: Action) {
  return offersReducer(state, action);
}
