import { on } from '@ngrx/store';

import * as actions from '../actions/list';
import { SuppliersState } from './state';

export const LIST_REDUCERS = [
  on(actions.loadSuppliers, (state: SuppliersState) => ({ ...state, suppliersIsLoading: true })),
  on(actions.loadSuppliersSuccess, (state: SuppliersState, { suppliers }) => ({ ...state, suppliersIsLoading: false, suppliers: suppliers })),
  on(actions.loadSuppliersFails, (state: SuppliersState) => ({ ...state, suppliersIsLoading: false })),
]