import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporKegiatanPage } from './lapor-kegiatan.page';

const routes: Routes = [
  {
    path: '',
    component: LaporKegiatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporKegiatanPageRoutingModule {}
