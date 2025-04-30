import { on } from '@ngrx/store';

import * as actions from '../actions/details';
import { OfferState } from './state';

export const DETAILS_REDUCERS = [
  on(actions.loadOffer, (state: OfferState) => ({ ...state, currentOfferIsLoading: true, currentOffer: null })),
  on(actions.loadOfferSuccess, (state: OfferState, { offer }) => ({ ...state, currentOfferIsLoading: false, currentOffer: offer })),
  on(actions.loadOfferFails, (state: OfferState) => ({ ...state, currentOfferIsLoading: false })),
]