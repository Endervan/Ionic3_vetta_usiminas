import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {
  elaboracao: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.elaboracao = this.fb.group({
      date: [''],
    });
  }

}
