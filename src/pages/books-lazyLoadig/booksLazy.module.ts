import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MaterialModule} from '../../shared/material/material.module';
import {BooksPage} from "./booksLazy";
import {CamposModule} from "../../shared/components/campos/campos.module";

@NgModule({
  declarations: [
    BooksPage,
  ],
  imports: [
    MaterialModule,
    // ReactiveFormsModule,
    // FormsModule,
    IonicPageModule.forChild(BooksPage),
    CamposModule,
  ],
})
export class BooksLazyModule {
}

