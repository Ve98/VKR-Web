import { on } from '@ngrx/store';

import * as actions from '../actions/list';
import { OfferState } from './state';

export const LIST_REDUCERS = [
    on(actions.loadOffers, (state: OfferState) => ({ ...state, offersIsLoading: true })),
    on(actions.loadOffersSuccess, (state: OfferState, { offers }) => ({ ...state, offersIsLoading: false, offers })),
    on(actions.loadOffersFails, (state: OfferState) => ({ ...state, offersIsLoading: false })),
]