import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalidadesPageRoutingModule } from './personalidades-routing.module';

import { PersonalidadesPage } from './personalidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalidadesPageRoutingModule
  ],
  declarations: [PersonalidadesPage]
})
export class PersonalidadesPageModule {}
