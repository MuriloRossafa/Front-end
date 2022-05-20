import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'centraldodentista',
    loadChildren: () => import('./centraldodentista/centraldodentista.module').then( m => m.CentraldodentistaPageModule)
  },
  {
    path: 'centraldocliente',
    loadChildren: () => import('./centraldocliente/centraldocliente.module').then( m => m.CentraldoclientePageModule)
  },
  {
    path: 'teladecadastro',
    loadChildren: () => import('./teladecadastro/teladecadastro.module').then( m => m.TeladecadastroPageModule)
  },
  {
    path: 'tela-inicial-paciente',
    loadChildren: () => import('./tela-inicial-paciente/tela-inicial-paciente.module').then( m => m.TelaInicialPacientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
