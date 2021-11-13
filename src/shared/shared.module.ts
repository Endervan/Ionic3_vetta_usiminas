import {NgModule} from '@angular/core';
import {InputDateComponent} from './components/campos/input-date/input-date.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import {ValidarCamposService} from "../services/validar-campos.service";
import {AlertComponent} from "./components/campos/alert/alert.component";
import {GenericaService} from "../services/generico.service";
import {PesquisaSastifacaoService} from "../services/pesquisaSastifacao.service";
import {InputNumberComponent} from "./components/campos/input-number/input-number.component";
import {InputSelectComponent} from "./components/campos/input-select/input-select.component";
import {InputTextareaComponent} from "./components/campos/input-textArea/input-textarea.component";
import {InputTextComponent} from "./components/campos/input-text/input-text.component";

@NgModule({
  declarations: [
    InputDateComponent,
    AlertComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputTextComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputDateComponent,
    AlertComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputTextComponent
  ],
  entryComponents: [
    AlertComponent,
  ],
  providers: [
    ValidarCamposService,
    GenericaService,
    PesquisaSastifacaoService,
  ]
})
export class SharedModule {
}
