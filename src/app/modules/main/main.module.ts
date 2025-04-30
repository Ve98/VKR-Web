import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MainFeatureName } from './store/selectors/state';
import { EFFECTS } from './store/effects';
import * as reducer from './store/reducers';

import { PAGES } from './pages';

@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,

    EffectsModule.forFeature(EFFECTS),
    StoreModule.forFeature(MainFeatureName, reducer.reducer),
  ],
})
export class MainModule {}
