import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamososPageRoutingModule } from './famosos-routing.module';

import { FamososPage } from './famosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamososPageRoutingModule
  ],
  declarations: [FamososPage]
})
export class FamososPageModule {}
