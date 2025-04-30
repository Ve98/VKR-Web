import { createSelector } from '@ngrx/store';
import { selectFeature } from './state';

export const getCurrentProduct = createSelector(
  selectFeature,
  (state) => state.currentProduct
);

export const getCurrentProductId = createSelector(
  selectFeature,
  (state) => state.currentProduct?.id
);
