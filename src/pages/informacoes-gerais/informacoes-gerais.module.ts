import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { MaterialModule } from '../../shared/material/material.module';
import { InformacoesGeraisPage } from './informacoes-gerais';

@NgModule({
  declarations: [
    InformacoesGeraisPage,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    IonicPageModule.forChild(InformacoesGeraisPage),
  ],
  exports: [
    InformacoesGeraisPage
  ]
})
export class InformacoesGeraisPageModule {}
