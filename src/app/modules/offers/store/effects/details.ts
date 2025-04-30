import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { of } from 'rxjs';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';

import { OffersService } from '@app/modules/offers/services';

import * as routerActions from '@shared/router/state/actions'
import * as routeSelectors from '@shared/router/state'
import * as actions from '@app/modules/offers/store/actions';
import * as selectors from '@app/modules/offers/store/selectors'

@Injectable()
export class OfferDetailsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private service: OffersService,
    private translate: TranslateService
  ) {}

  enterToDetails$ = createEffect(() => this.actions$.pipe(
    ofType(actions.enterToDetails),
    map(action => routerActions.go({ path: [`offers/${action.id}`] }))
  ));

  loadOffer$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadOffer),
    withLatestFrom(this.store$.select(routeSelectors.getId)),
    switchMap(([_, id]) => this.service.loadOffer(id).pipe(
      map(offer => actions.loadOfferSuccess({ offer })),
      catchError(error => of(actions.loadOfferFails({ error })))
    ))
  ));
}
