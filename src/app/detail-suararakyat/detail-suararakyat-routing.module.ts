import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSuararakyatPage } from './detail-suararakyat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSuararakyatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSuararakyatPageRoutingModule {}
