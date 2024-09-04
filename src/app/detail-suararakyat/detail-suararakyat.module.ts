import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSuararakyatPageRoutingModule } from './detail-suararakyat-routing.module';

import { DetailSuararakyatPage } from './detail-suararakyat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSuararakyatPageRoutingModule
  ],
  declarations: [DetailSuararakyatPage]
})
export class DetailSuararakyatPageModule {}
