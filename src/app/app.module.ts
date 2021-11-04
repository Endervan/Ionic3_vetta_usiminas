import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {DataProvider} from '../providers/data/data';

import {HomePage} from '../pages/home/home';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BooksLazyModule} from "../pages/books-lazyLoadig/booksLazy.module";
import {BooksPage} from "../pages/books/books";
import {CamposModule} from "../shared/components/campos/campos.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BooksPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    BooksLazyModule,
    CamposModule
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
    DataProvider,

  ]
})
export class AppModule {
}
