import { on } from '@ngrx/store';

import * as actions from '../actions/details';
import { SuppliersState } from './state';

export const DETAILS_REDUCERS = [
  on(actions.loadSupplier, (state: SuppliersState) => ({ ...state, suppliersIsLoading: true, currentSupplier: null })),
  on(actions.loadSupplierSuccess, (state: SuppliersState, { supplier }) => ({ ...state, suppliersIsLoading: false, currentSupplier: supplier })),
  on(actions.loadSupplierFails, (state: SuppliersState) => ({ ...state, suppliersIsLoading: false })),
]