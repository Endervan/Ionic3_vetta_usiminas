import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SelecaoClientesPage} from './selecao-clientes';

@NgModule({
  declarations: [
    SelecaoClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecaoClientesPage),
    [BrowserAnimationsModule],
  ],
  exports: [
    SelecaoClientesPage
  ]
})

export class SelecaoClientesPageModule {
}
