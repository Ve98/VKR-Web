import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
import * as routerActions from 'src/app/shared/router/state/actions'
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product$ = this.store$.select(selectors.getCurrentProduct);

  constructor(private store$: Store) { 
    this.store$.dispatch(actions.loadProduct());
  }

  toList() {
    this.store$.dispatch(routerActions.go({ path: [`products`] }));
  }
}
