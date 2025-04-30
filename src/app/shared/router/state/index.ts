import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

const RouterFeatureName = 'router';
const selectRouterFeature =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>(RouterFeatureName);

function selectRouteParam(paramName: string) {
  return createSelector(
    selectRouterFeature,
    (route) => route?.state?.params[paramName]
  );
}

function selectQueryParam(paramName: string) {
  return createSelector(
    selectRouterFeature,
    (route) => route?.state?.queryParams[paramName]
  );
}

export const selectUrl = createSelector(
  selectRouterFeature,
  (route) => route?.state?.url
);

export const getId = createSelector(selectRouteParam('id'), (id) => id);
