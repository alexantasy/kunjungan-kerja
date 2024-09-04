import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuaraMasyarakatPage } from './suara-masyarakat.page';

const routes: Routes = [
  {
    path: '',
    component: SuaraMasyarakatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuaraMasyarakatPageRoutingModule {}
