import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuriosidadesPage } from './curiosidades.page';

const routes: Routes = [
  {
    path: '',
    component: CuriosidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuriosidadesPageRoutingModule {}
