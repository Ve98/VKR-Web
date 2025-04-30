import { createReducer, on, Action } from '@ngrx/store';

import { MainState, initialState } from './state';
import { LIST_REDUCERS } from './list';

import * as actions from '../actions';
export * from './state';

const mainReducer = createReducer(
  initialState,

  on(actions.empty, (state: MainState) => ({ ...state })),

  ...LIST_REDUCERS
);

export function reducer(state: MainState, action: Action) {
  return mainReducer(state, action);
}
