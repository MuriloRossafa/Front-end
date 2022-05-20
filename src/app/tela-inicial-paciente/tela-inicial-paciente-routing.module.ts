import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaInicialPacientePage } from './tela-inicial-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaInicialPacientePageRoutingModule {}
