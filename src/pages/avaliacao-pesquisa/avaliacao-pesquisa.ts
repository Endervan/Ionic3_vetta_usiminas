import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-avaliacao-pesquisa',
  templateUrl: 'avaliacao-pesquisa.html',
})
export class AvaliacaoPesquisaPage {
  info1: string = 'Informações gerais';
  info2: string = 'Seleção de clientes';
  info3: string = 'Cálculo de meta';
  info4: string = 'Cronograma';

  elaboracao: FormGroup;
  panelOpenState: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.elaboracao = this.fb.group({
      date: [''],
    });
  }


}
