import { createFeatureSelector } from '@ngrx/store'
import { OfferState } from '../reducers';
import * as routerSelectors from 'src/app/shared/router/state';

export const OfferFeatureName = 'offers';

export interface AppState extends routerSelectors.AppState {
  offers: OfferState;
}

export const selectFeature = createFeatureSelector<OfferState>(OfferFeatureName);