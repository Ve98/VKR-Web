import { createSelector } from '@ngrx/store';
import { selectFeature } from './state';

export const getSuppliers = createSelector(
  selectFeature,
  state => state.suppliers
);
