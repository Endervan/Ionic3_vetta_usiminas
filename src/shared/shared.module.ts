import {NgModule} from '@angular/core';
import {InputDateMesEAnoComponent} from './components/campos/input-date/input-dateMesEAno.component';
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
import {TabelaComponent} from "./components/campos/tabela/tabela.component";
import {InputDateAnoComponent} from "./components/campos/input-date/input-dateAno.component";
import {InputDateComponent} from "./components/campos/input-date/input-date.component";

@NgModule({
  declarations: [
    InputDateMesEAnoComponent,
    InputDateAnoComponent,
    InputDateComponent,
    AlertComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputTextComponent,
    TabelaComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputDateMesEAnoComponent,
    InputDateAnoComponent,
    InputDateComponent,
    AlertComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextareaComponent,
    InputTextComponent,
    TabelaComponent,
  ],
  entryComponents: [
    AlertComponent,
    InputDateMesEAnoComponent,
    InputDateAnoComponent,
    InputDateComponent
  ],
  providers: [
    ValidarCamposService,
    GenericaService,
    PesquisaSastifacaoService,
  ]
})
export class SharedModule {
}
