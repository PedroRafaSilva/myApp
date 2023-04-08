import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuriosidadesPageRoutingModule } from './curiosidades-routing.module';

import { CuriosidadesPage } from './curiosidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuriosidadesPageRoutingModule
  ],
  declarations: [CuriosidadesPage]
})
export class CuriosidadesPageModule {}
