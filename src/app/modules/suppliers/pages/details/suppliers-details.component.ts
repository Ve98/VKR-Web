import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
import * as routerActions from 'src/app/shared/router/state/actions'

@Component({
  selector: 'app-suppliers-details',
  templateUrl: './suppliers-details.component.html',
  styleUrl: './suppliers-details.component.scss'
})
export class SuppliersDetailsComponent {
  supplier$ = this.store$.select(selectors.getCurrentSupplier);

  constructor(private store$: Store) { 
    this.store$.dispatch(actions.loadSupplier());
  }

  toList() {
    this.store$.dispatch(routerActions.go({ path: [`suppliers`] }));
  }
}
