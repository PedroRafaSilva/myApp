import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cultura',
    loadChildren: () => import('./cultura/cultura.module').then( m => m.CulturaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pontos',
    loadChildren: () => import('./pontos/pontos.module').then( m => m.PontosPageModule)
  },
  {
    path: 'personalidades',
    loadChildren: () => import('./personalidades/personalidades.module').then( m => m.PersonalidadesPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'curiosidades/:id',
    loadChildren: () => import('./curiosidades/curiosidades.module').then( m => m.CuriosidadesPageModule)
  },
  {
    path: 'pratos/:id',
    loadChildren: () => import('./pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'locais/:id',
    loadChildren: () => import('./locais/locais.module').then( m => m.LocaisPageModule)
  },
  {
    path: 'famosos/:id',
    loadChildren: () => import('./famosos/famosos.module').then( m => m.FamososPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
