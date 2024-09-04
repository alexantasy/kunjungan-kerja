import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanPresensiPageRoutingModule } from './laporan-presensi-routing.module';

import { LaporanPresensiPage } from './laporan-presensi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporanPresensiPageRoutingModule
  ],
  declarations: [LaporanPresensiPage]
})
export class LaporanPresensiPageModule {}
