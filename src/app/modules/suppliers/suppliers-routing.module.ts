import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuppliersListComponent } from './pages/list/suppliers-list.component';
import { SuppliersDetailsComponent } from './pages/details/suppliers-details.component';

const routes: Routes = [
  {
    path: '',
    title: 'Suppliers',
    component: SuppliersListComponent,
  },
  {
    path: ':id',
    title: 'Suppliers',
    component: SuppliersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SuppliersRoutingModule {}
