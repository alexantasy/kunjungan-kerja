import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporanPresensiPage } from './laporan-presensi.page';

const routes: Routes = [
  {
    path: '',
    component: LaporanPresensiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporanPresensiPageRoutingModule {}
