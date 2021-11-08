import {NgModule} from '@angular/core';
import {InputDateComponent} from './input-date/input-date.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../material/material.module";
import {ValidarCamposService} from "./validar-campos.service";
import {AlertComponent} from "./alert/alert.component";
import {GenericaService} from "../../services/generico.service";
import {PesquisaSastifacaoService} from "../../services/pesquisaSastifacao.service";

@NgModule({
  declarations: [
    InputDateComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    InputDateComponent,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [
    ValidarCamposService,
    GenericaService,
    PesquisaSastifacaoService
  ]
})
export class CamposModule {
}
