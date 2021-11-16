import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertComponent} from "../../shared/components/campos/alert/alert.component";
import {Alert} from "../../shared/models/alert";
import {MatDialog} from "@angular/material/dialog";
import {HomePage} from "../home/home";
import {GenericaService} from "../../services/generico.service";

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'booksLazy.html',
})
export class BooksLazyPage implements OnInit {
  cadastroForm: FormGroup;
  pesquisas: Array<string>;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private genericoService: GenericaService,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }


  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      calendario: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      numero: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      pesquisasForm: ['', [Validators.required]],
    });

    this.pesquisas = ['2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  }

  reiniciarForm(): void {
    this.cadastroForm.reset();
  }

  modalMaterial() {
    const config = {
      data: {
        btnSucesso: 'Ir para alguma pagina',
        btnCancelar: 'sair',
        corBntCancelar: 'danger',
        possuirBtnFechar: true
      } as Alert,
      panelClass: 'alertCustom'

    };
    const dialogRef = this.dialog.open(AlertComponent, config);
  }

  async alertIonic(): Promise<void> {
    await this.genericoService.alert({message: 'teste alert ionic 3', buttons: ['OK'], title: 'resolve'}); //  msg erro
  }

  async loadingIonic(): Promise<void> {
    await this.genericoService.loading({content: 'Tente Novamente', duration: 1000,}); //  msg erro
  }

  async toastIonic(): Promise<void> {
    await this.genericoService.toast({message: 'toast personalizado', position: 'top', closeButtonText: 'sair'}); //  toast
  }

  async testeNavegacao() {
    await this.genericoService.irPagina(HomePage); //  toast
  }

}
