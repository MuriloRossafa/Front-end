import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaInicialPacientePageRoutingModule } from './tela-inicial-paciente-routing.module';

import { TelaInicialPacientePage } from './tela-inicial-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaInicialPacientePageRoutingModule
  ],
  declarations: [TelaInicialPacientePage]
})
export class TelaInicialPacientePageModule {}
