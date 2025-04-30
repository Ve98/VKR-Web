import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { OffersService } from '@app/modules/offers/services';

import * as actions from '@app/modules/offers/store/actions';

@Injectable()
export class OfferListEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private service: OffersService
  ) {}

  loadOffers$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadOffers),
    switchMap(() => this.service.loadOffers().pipe(
      map(offers => actions.loadOffersSuccess({ offers })),
      catchError(error => of(actions.loadOffersFails({ error })))
    ))
  ));
}
