import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SuppliersFeatureName } from './store/selectors/state';
import { EFFECTS } from './store/effects';
import * as reducer from './store/reducers';

import { PAGES } from './pages';

@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    SharedModule,

    EffectsModule.forFeature(EFFECTS),
    StoreModule.forFeature(SuppliersFeatureName, reducer.reducer),
  ],
})
export class SuppliersModule {}
