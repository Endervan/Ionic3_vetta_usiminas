import {Component, OnInit} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-books',
  templateUrl: 'booksLazy.html',
})
export class BooksPage implements OnInit {
  cadastro: FormGroup;
  disableSelect = new FormControl(false);

  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
  }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      dtLacamento: ['', [Validators.required]],
    });
  }


}
