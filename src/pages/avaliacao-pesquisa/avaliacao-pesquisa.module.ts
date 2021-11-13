import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MaterialModule} from "../../shared/material/material.module";
import {SharedModule} from "../../shared/shared.module";
import {InformacoesGeraisPageModule} from "../informacoes-gerais/informacoes-gerais.module";
import {SelecaoClientesPageModule} from "../selecao-clientes/selecao-clientes.module";
import {CalculoDeMetasPageModule} from "../calculo-de-metas/calculo-de-metas.module";
import {AvaliacaoPesquisaPage} from "./avaliacao-pesquisa";

@NgModule({
  declarations: [
    AvaliacaoPesquisaPage,
  ],
  imports: [
    IonicPageModule.forChild(AvaliacaoPesquisaPage),
    MaterialModule,
    SharedModule,
    InformacoesGeraisPageModule,
    SelecaoClientesPageModule,
    CalculoDeMetasPageModule,
  ],
})
export class AvaliacaoPesquisaPageModule {
}
