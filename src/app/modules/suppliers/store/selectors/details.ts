import { createSelector } from '@ngrx/store';
import { selectFeature } from './state';

export const getCurrentSupplier = createSelector(
  selectFeature,
  (state) => state.currentSupplier
);

export const getCurrentSupplierId = createSelector(
  selectFeature,
  (state) => state.currentSupplier?.id
);

export const getCurrentSupplierName = createSelector(
  selectFeature,
  (state) => state.currentSupplier?.name
);
