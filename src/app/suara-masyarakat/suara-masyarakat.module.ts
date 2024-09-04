import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuaraMasyarakatPageRoutingModule } from './suara-masyarakat-routing.module';

import { SuaraMasyarakatPage } from './suara-masyarakat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuaraMasyarakatPageRoutingModule
  ],
  declarations: [SuaraMasyarakatPage]
})
export class SuaraMasyarakatPageModule {}
