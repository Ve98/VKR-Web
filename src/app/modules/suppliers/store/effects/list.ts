import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { SuppliersService } from '../../services/suppliers.service';

import * as actions from '../actions';
import * as selectors from '../selectors';

@Injectable()
export class SuppliersListEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private service: SuppliersService,
  ) {}

  loadSuppliers$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadSuppliers),
    switchMap(() => this.service.loadSuppliers().pipe(
      map(suppliers => actions.loadSuppliersSuccess({ suppliers })),
      catchError(error => of(actions.loadSuppliersFails({ error })))
    ))
  ));
}
