import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculoDeMetaPage } from './calculo-de-meta';
import {MaterialModule} from "../../shared/material/material.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CalculoDeMetaPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculoDeMetaPage),
    MaterialModule,
    SharedModule,
  ],
})
export class CalculoDeMetaPageModule {}
