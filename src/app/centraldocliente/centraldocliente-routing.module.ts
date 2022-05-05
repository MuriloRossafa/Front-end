import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentraldoclientePage } from './centraldocliente.page';

const routes: Routes = [
  {
    path: '',
    component: CentraldoclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentraldoclientePageRoutingModule {}
