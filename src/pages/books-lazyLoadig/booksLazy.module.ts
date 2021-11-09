import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MaterialModule} from '../../shared/material/material.module';
import {CamposModule} from "../../shared/components/campos/campos.module";
import {BooksLazyPage} from "./booksLazy";

@NgModule({
  declarations: [
    BooksLazyPage,
  ],
  imports: [
    MaterialModule,
    // ReactiveFormsModule,
    // FormsModule,
    IonicPageModule.forChild(BooksLazyPage),
    CamposModule,
  ],
})
export class BooksLazyModule {
}

