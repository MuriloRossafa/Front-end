import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeladecadastroPageRoutingModule } from './teladecadastro-routing.module';

import { TeladecadastroPage } from './teladecadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeladecadastroPageRoutingModule
  ],
  declarations: [TeladecadastroPage]
})
export class TeladecadastroPageModule {}
