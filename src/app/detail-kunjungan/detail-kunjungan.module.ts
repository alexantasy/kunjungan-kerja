import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailKunjunganPageRoutingModule } from './detail-kunjungan-routing.module';

import { DetailKunjunganPage } from './detail-kunjungan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailKunjunganPageRoutingModule
  ],
  declarations: [DetailKunjunganPage]
})
export class DetailKunjunganPageModule {}
