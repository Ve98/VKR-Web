import { createFeatureSelector } from '@ngrx/store'

import { MainState } from '../reducers';

export const MainFeatureName = 'main';

export interface AppState {
    main: MainState;
}

export const selectFeature = createFeatureSelector<MainState>(MainFeatureName);