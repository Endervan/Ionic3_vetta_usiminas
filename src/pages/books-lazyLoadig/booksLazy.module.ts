import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MaterialModule} from '../../shared/material/material.module';
import {SharedModule} from "../../shared/shared.module";
import {BooksLazyPage} from "./booksLazy";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BooksLazyPage,
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    MaterialModule,
    IonicPageModule.forChild(BooksLazyPage),
    SharedModule,
  ],
  exports: [
    BooksLazyPage
  ]
})
export class BooksLazyModule {
}

