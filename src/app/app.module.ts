import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BooksLazyModule} from "../pages/books-lazyLoadig/booksLazy.module";
import {BooksPage} from "../pages/books/books";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../shared/material/material.module";
import {HttpClientModule} from "@angular/common/http";
import {AvaliacaoPageModule} from "../pages/avaliacao/avaliacao.module";
import {CalculoDeMetaPageModule} from "../pages/calculo-de-meta/calculo-de-meta.module";
import {SelecaoClientesPageModule} from "../pages/selecao-clientes/selecao-clientes.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BooksLazyModule,
    AvaliacaoPageModule,
    CalculoDeMetaPageModule,
    SelecaoClientesPageModule,
    SharedModule,
    MaterialModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BooksPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {
}
