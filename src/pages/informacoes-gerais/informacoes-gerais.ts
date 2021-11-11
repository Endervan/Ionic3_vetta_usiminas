import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-informacoes-gerais',
  templateUrl: 'informacoes-gerais.html',
})
export class InformacoesGeraisPage {
  startDate = new Date(1990, 0, 1);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacoesGeraisPage');
  }
}
