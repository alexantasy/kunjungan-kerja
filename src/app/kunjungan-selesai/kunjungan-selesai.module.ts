import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KunjunganSelesaiPageRoutingModule } from './kunjungan-selesai-routing.module';

import { KunjunganSelesaiPage } from './kunjungan-selesai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KunjunganSelesaiPageRoutingModule
  ],
  declarations: [KunjunganSelesaiPage]
})
export class KunjunganSelesaiPageModule {}
