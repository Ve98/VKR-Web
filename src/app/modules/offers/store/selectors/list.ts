import { createSelector } from '@ngrx/store';
import { selectFeature } from './state';

export const getOffers = createSelector(
  selectFeature,
  state => state.offers
);

// export const getBalance = createSelector(
//     selectFeature,
//     state => state.transactions[0].balance
// );