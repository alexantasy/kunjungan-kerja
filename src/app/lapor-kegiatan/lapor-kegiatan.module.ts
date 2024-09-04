import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporKegiatanPageRoutingModule } from './lapor-kegiatan-routing.module';

import { LaporKegiatanPage } from './lapor-kegiatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporKegiatanPageRoutingModule
  ],
  declarations: [LaporKegiatanPage]
})
export class LaporKegiatanPageModule {}
