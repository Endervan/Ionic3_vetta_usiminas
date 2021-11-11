import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Directive, HostListener, NgModule, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonicPageModule, NavController } from 'ionic-angular';
import { SelecaoClientesPage } from './selecao-clientes';

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

  constructor(public navCtrl: NavController) {
  }
}
