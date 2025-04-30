import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './pages/list/product-list.component';
import { ProductDetailsComponent } from './pages/details/product-details.component';

const routes: Routes = [
  {
    path: '',
    title: "Products",
    component: ProductListComponent
  },
  {
    path: ':id',
    title: 'Product',
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProductsRoutingModule { }
