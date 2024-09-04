import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailKunjunganPage } from './detail-kunjungan.page';

const routes: Routes = [
  {
    path: '',
    component: DetailKunjunganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailKunjunganPageRoutingModule {}
