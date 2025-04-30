import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { OffersRoutingModule } from './offers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { OfferFeatureName } from './store/selectors/state';
import { EFFECTS } from './store/effects';
import * as reducer from './store/reducers';

import { PAGES } from './pages';

@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    SharedModule,

    EffectsModule.forFeature(EFFECTS),
    StoreModule.forFeature(OfferFeatureName, reducer.reducer),
  ]
})
export class OffersModule { }
