import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelainicialclientePage } from './telainicialcliente.page';

const routes: Routes = [
  {
    path: '',
    component: TelainicialclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelainicialclientePageRoutingModule {}
