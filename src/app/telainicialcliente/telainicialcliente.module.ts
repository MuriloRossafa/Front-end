import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelainicialclientePageRoutingModule } from './telainicialcliente-routing.module';

import { TelainicialclientePage } from './telainicialcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelainicialclientePageRoutingModule
  ],
  declarations: [TelainicialclientePage]
})
export class TelainicialclientePageModule {}
