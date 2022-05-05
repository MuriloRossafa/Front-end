import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentraldodentistaPage } from './centraldodentista.page';

const routes: Routes = [
  {
    path: '',
    component: CentraldodentistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentraldodentistaPageRoutingModule {}
