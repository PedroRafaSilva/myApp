import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalidadesPage } from './personalidades.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalidadesPageRoutingModule {}
