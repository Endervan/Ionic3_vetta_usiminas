import {Component, ElementRef} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-selecao-clientes',
  templateUrl: 'selecao-clientes.html',
})
export class SelecaoClientesPage {
  event: any;

  constructor(public element: ElementRef, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  criarPromptRemover() {
    let prompt = this.alertCtrl.create({
      title: 'Remover',
      message: "Adicione uma justificativa para remover o cliente da seleção de clientes a serem avaliados.",
      inputs: [
        {
          type: "textarea",
          name: "justificativa",
          placeholder: "Justificativa"
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelado!');
          }
        },
        {
          text: 'Remover',
          handler: data => {
            console.log('Removido!');
          }
        }
      ]
    });
    prompt.present();
  }
}
