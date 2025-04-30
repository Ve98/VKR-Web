import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainListComponent } from './pages/list/main-list.component';

const routes: Routes = [
  {
    path: '',
    title: 'Main',
    component: MainListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
