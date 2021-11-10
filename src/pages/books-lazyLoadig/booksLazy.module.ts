import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MaterialModule} from '../../shared/material/material.module';
import {SharedModule} from "../../shared/shared.module";
import {BooksLazyPage} from "./booksLazy";

@NgModule({
  declarations: [
    BooksLazyPage,
  ],
  imports: [
    MaterialModule,
    IonicPageModule.forChild(BooksLazyPage),
    SharedModule,
  ],
})
export class BooksLazyModule {
}

