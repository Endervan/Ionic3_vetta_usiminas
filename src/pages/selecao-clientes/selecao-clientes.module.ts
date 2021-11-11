import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SelecaoClientesPage} from './selecao-clientes';
import {MaterialModule} from "../../shared/material/material.module";

@NgModule({
  declarations: [
    SelecaoClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecaoClientesPage),
    [BrowserAnimationsModule],
    MaterialModule,
  ],
  exports: [
    SelecaoClientesPage
  ]
})

export class SelecaoClientesPageModule {
}
