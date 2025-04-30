import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductFeatureName } from './store/selectors/state';
import { EFFECTS } from './store/effects';
import * as reducer from './store/reducers';

import { PAGES } from './pages';

@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,

    EffectsModule.forFeature(EFFECTS),
    StoreModule.forFeature(ProductFeatureName, reducer.reducer),
  ]
})
export class ProductsModule { }
