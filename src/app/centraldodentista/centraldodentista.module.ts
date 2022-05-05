import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentraldodentistaPageRoutingModule } from './centraldodentista-routing.module';

import { CentraldodentistaPage } from './centraldodentista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentraldodentistaPageRoutingModule
  ],
  declarations: [CentraldodentistaPage]
})
export class CentraldodentistaPageModule {}
