import { createFeatureSelector } from '@ngrx/store'
import { ProductState } from '../reducers';
import * as routerSelectors from 'src/app/shared/router/state';

export const ProductFeatureName = 'products';

export interface AppState extends routerSelectors.AppState {
  products: ProductState;
}

export const selectFeature = createFeatureSelector<ProductState>(ProductFeatureName);