
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Alert} from "../../models/alert";

@Component({
  selector: 'app-alerta',
  template:`
    <h1 mat-dialog-title>{{alert.titulo}}</h1>
    <div mat-dialog-content>
      <p>{{alert.descricao}}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button
              [color]="alert.corBntSucesso"
              cdkFocusInitial
              [mat-dialog-close]="true">
        {{alert.btnSucesso}}
      </button>

      <button mat-raised-button
              [color]="alert.corBntCancelar"
              [mat-dialog-close]="false"
              *ngIf="alert.possuirBtnFechar">
        {{alert.btnCancelar}}
      </button>
    </div>
  `

})
export class AlertComponent implements OnInit {
  alert = {
    titulo: 'Sucesso',
    descricao: 'Registro Salvo com Sucesso',
    btnSucesso: 'OK',
    btnCancelar: 'Fechar',
    corBntSucesso: 'accent',
    corBntCancelar: 'warn',
    possuirBtnFechar: false
  } as Alert;

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Alert) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.alert.titulo = this.data.titulo || this.alert.titulo;
      this.alert.descricao = this.data.descricao || this.alert.descricao;
      this.alert.btnSucesso = this.data.btnSucesso || this.alert.btnSucesso;
      this.alert.btnCancelar = this.data.btnCancelar || this.alert.btnCancelar;
      this.alert.corBntSucesso = this.data.corBntSucesso || this.alert.corBntSucesso;
      this.alert.corBntCancelar = this.data.corBntCancelar || this.alert.corBntCancelar;
      this.alert.possuirBtnFechar = this.data.possuirBtnFechar || this.alert.possuirBtnFechar;
    }
  }

}
