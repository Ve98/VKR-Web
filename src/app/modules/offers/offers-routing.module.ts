import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferListComponent } from './pages/list/offer-list.component';
import { OfferDetailsComponent } from './pages/details/offer-details.component';

const routes: Routes = [
  {
    path: '',
    title: "Offers",
    component: OfferListComponent
  },
  {
    path: ':id',
    title: 'Offer',
    component: OfferDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class OffersRoutingModule { }
