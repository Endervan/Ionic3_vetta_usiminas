import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlertComponent} from "../../shared/components/campos/alert/alert.component";
import {Alert} from "../../shared/components/models/alert";
import {GenericaService} from "../../shared/components/services/generico.service";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-books1',
  templateUrl: 'books.html',
})
export class BooksPage {
  cadastro: FormGroup;

  constructor(private fb: FormBuilder,public genericaService: GenericaService,
              public dialog: MatDialog, private navCtrl: NavController,
              public navParams: NavParams) {
  }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      dtLacamento: ['', [Validators.required]],
    });
  }

  modal():void {
    const config = {
      data: {
        btnSucesso: 'Ir para alguma pagina',
        btnCancelar: 'Fechar',
        corBntCancelar: 'warn',
        possuirBtnFechar: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
  }

  async alertIonic(): Promise<void> {
    await this.genericaService.alert({message: 'teste alert ionic 3', buttons: ['OK'],title:'resolve'}); //  msg erro
  }

  async loadingIonic():Promise<void> {
     await this.genericaService.loading({duration:1000,}); //  msg erro
  }

  async toastIonic():Promise<void> {
    await this.genericaService.toast({message: 'toast personalizado', position: 'top',closeButtonText:'sair'}); //  toast
  }

  async testeNavegacao() {
     await this.genericaService.irPagina(HomePage); //  toast
  }


}
