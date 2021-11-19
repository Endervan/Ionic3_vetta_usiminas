import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AvaliacaoPesquisaPage} from "../pages/avaliacao-pesquisa/avaliacao-pesquisa";
import {BooksPage} from "../pages/books/books";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = AvaliacaoPesquisaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irHome(){
    this.rootPage=BooksPage;
  }
}

