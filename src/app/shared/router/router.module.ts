import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { RoutingEffects } from './state/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './state/serializer';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([RoutingEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
})
export class RouterModule {}
