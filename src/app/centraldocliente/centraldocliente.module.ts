import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentraldoclientePageRoutingModule } from './centraldocliente-routing.module';

import { CentraldoclientePage } from './centraldocliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentraldoclientePageRoutingModule
  ],
  declarations: [CentraldoclientePage]
})
export class CentraldoclientePageModule {}
