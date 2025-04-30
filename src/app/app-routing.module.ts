import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(module => module.MainModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('./modules/offers/offers.module').then(module => module.OffersModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule)
      },
      {
        path: 'suppliers',
        loadChildren: () => import('./modules/suppliers/suppliers.module').then(module => module.SuppliersModule)
      },
      {
        path: "**", 
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
