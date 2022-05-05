import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeladecadastroPage } from './teladecadastro.page';

const routes: Routes = [
  {
    path: '',
    component: TeladecadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeladecadastroPageRoutingModule {}
