import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
import * as routerActions from 'src/app/shared/router/state/actions'

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.scss'
})
export class OfferDetailsComponent {
  offer$ = this.store$.select(selectors.getCurrentOffer);

  constructor(private store$: Store) { 
    this.store$.dispatch(actions.loadOffer());
  }

  back() {
    this.store$.dispatch(routerActions.back());
  }
}
