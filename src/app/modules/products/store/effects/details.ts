import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { of } from 'rxjs';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';

import { ProductsService } from '@products/services';

import * as routerActions from '@shared/router/state/actions'
import * as routeSelectors from '@shared/router/state'
import * as actions from '@products/store/actions';
import * as selectors from '@products/store/selectors'

@Injectable()
export class ProductDetailsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private service: ProductsService,
    private translate: TranslateService
  ) {}

  enterToDetails$ = createEffect(() => this.actions$.pipe(
    ofType(actions.enterToDetails),
    map(action => routerActions.go({ path: [`products/${action.id}`] }))
  ));

  loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadProduct),
    withLatestFrom(this.store$.select(routeSelectors.getId)),
    switchMap(([_, id]) => this.service.loadProduct(id).pipe(
      map(product => actions.loadProductSuccess({ product })),
      catchError(error => of(actions.loadProductFails({ error })))
    ))
  ));
}
