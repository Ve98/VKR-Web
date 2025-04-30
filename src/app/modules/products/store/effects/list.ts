import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { ProductsService } from '@products/services';

import * as actions from '@products/store/actions';

@Injectable()
export class ProductListEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private service: ProductsService
  ) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadProducts),
    switchMap(() => this.service.loadProducts().pipe(
      map(products => actions.loadProductsSuccess({ products })),
      catchError(error => of(actions.loadProductsFails({ error })))
    ))
  ));
}
