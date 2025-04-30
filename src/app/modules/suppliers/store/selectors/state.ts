import { createFeatureSelector } from '@ngrx/store';
import { SuppliersState } from '../reducers';
import * as routerSelectors from 'src/app/shared/router/state';

export const SuppliersFeatureName = 'suppliers';

export interface AppState extends routerSelectors.AppState {
  serverNodes: SuppliersState;
}

export const selectFeature = createFeatureSelector<SuppliersState>(SuppliersFeatureName);
