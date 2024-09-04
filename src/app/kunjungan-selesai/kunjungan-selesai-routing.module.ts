import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KunjunganSelesaiPage } from './kunjungan-selesai.page';

const routes: Routes = [
  {
    path: '',
    component: KunjunganSelesaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KunjunganSelesaiPageRoutingModule {}
