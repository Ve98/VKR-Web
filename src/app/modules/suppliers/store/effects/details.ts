import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
} from 'rxjs/operators';

import { SuppliersService } from '../../services/suppliers.service';

import * as actions from '../actions';
import * as selectors from '../selectors'
import * as routerActions from 'src/app/shared/router/state/actions'
import * as routeSelectors from 'src/app/shared/router/state'


@Injectable()
export class SuppliersDetailsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private service: SuppliersService
  ) {}

  enterToDetails$ = createEffect(() => this.actions$.pipe(
    ofType(actions.enterToDetails),
    map(action => routerActions.go({ path: [`suppliers/${action.id}`] }))
  ));

  loadSupplier$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadSupplier),
    withLatestFrom(this.store$.select(routeSelectors.getId)),
    switchMap(([_, id]) => this.service.loadSupplier(id).pipe(
      map(supplier => actions.loadSupplierSuccess({ supplier })),
      catchError(error => of(actions.loadSupplierFails({ error })))
    ))
  ));
}
