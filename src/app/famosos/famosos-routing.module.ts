import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamososPage } from './famosos.page';

const routes: Routes = [
  {
    path: '',
    component: FamososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamososPageRoutingModule {}
