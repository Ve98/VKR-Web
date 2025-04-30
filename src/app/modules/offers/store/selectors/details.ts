import { createSelector } from '@ngrx/store';
import { selectFeature } from './state';

export const getCurrentOffer = createSelector(
  selectFeature,
  (state) => state.currentOffer
);

export const getCurrentOfferId = createSelector(
  selectFeature,
  (state) => state.currentOffer?.id
);

// export const getCurrentOrderName = createSelector(
//   selectFeature,
//   (state) => state.currentOrder?.name
// );
