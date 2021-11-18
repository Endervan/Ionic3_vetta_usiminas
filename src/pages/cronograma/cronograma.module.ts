import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CronogramaPage } from './cronograma';
import {MaterialModule} from "../../shared/material/material.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CronogramaPage,
  ],
  imports: [
    IonicPageModule.forChild(CronogramaPage),
    MaterialModule,
    SharedModule,
  ],
  exports: [
    CronogramaPage
  ]
})
export class CronogramaPageModule {}
