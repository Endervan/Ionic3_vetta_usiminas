import {NgModule} from '@angular/core';
import {InputDateComponent} from './components/campos/input-date/input-date.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import {ValidarCamposService} from "./services/validar-campos.service";
import {AlertComponent} from "./components/campos/alert/alert.component";
import {GenericaService} from "./services/generico.service";
import {PesquisaSastifacaoService} from "./services/pesquisaSastifacao.service";
import {AvaliacaoPageModule} from "../pages/avaliacao/avaliacao.module";

@NgModule({
  declarations: [
    InputDateComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AvaliacaoPageModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    InputDateComponent,
    AlertComponent,
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
export class SharedModule {
}
