import { createSelector } from '@ngrx/store';
import { selectFeature } from './state';

export const getProducts = createSelector(
  selectFeature,
  state => state.products
);

// export const getBalance = createSelector(
//     selectFeature,
//     state => state.transactions[0].balance
// );