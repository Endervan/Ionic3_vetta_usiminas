import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MaterialModule} from "../../shared/material/material.module";
import {SharedModule} from "../../shared/shared.module";
import {InformacoesGeraisPageModule} from "../informacoes-gerais/informacoes-gerais.module";
import {SelecaoClientesPageModule} from "../selecao-clientes/selecao-clientes.module";
import {CalculoDeMetasPage} from "./calculo-de-metas";

@NgModule({
  declarations: [
    CalculoDeMetasPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculoDeMetasPage),
    MaterialModule,
    SharedModule,
    InformacoesGeraisPageModule,
    SelecaoClientesPageModule,
  ],
  exports: [
    CalculoDeMetasPage
  ]
})
export class CalculoDeMetasPageModule {
}
