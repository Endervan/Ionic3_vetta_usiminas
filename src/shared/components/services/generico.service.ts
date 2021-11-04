import {Injectable} from '@angular/core';
import {
  AlertController,
  AlertOptions,
  App,
  LoadingController,
  LoadingOptions,
  ToastController,
  ToastOptions
} from "ionic-angular";

@Injectable()
export class GenericaService {

  constructor(private toastController: ToastController, public  app: App,
              public alertCtrl: AlertController, public loadingController: LoadingController) {
  }

  // mensagem de alert ionic 3
  async alert(options?: AlertOptions): Promise<any> {
    const alert = await this.alertCtrl.create(options);
    await alert.present();
    return alert;
  }

  // loading processos
  async loading(options?: LoadingOptions): Promise<any> {
    const loading = await this.loadingController.create({
      ...options,// concatenando params
    });
    await loading.present();
  }

  //  Toast processos
  async toast(options?: ToastOptions): Promise<any> {
    const toast = await this.toastController.create({
      position: 'bottom',
      duration: 2000,
      ...options, // passa restantes paramentos
    });
    await toast.present();
    return toast;
  }

  // ############################################
  // ir Page
  async irPagina(pagina) {
    await this.app.getActiveNav().push(pagina);
  }

  // volta Page
  async voltaPagina() {
    await this.app.getActiveNav().pop();
  }

  //    page root
  async rootPagina(pagina) {
    await this.app.getActiveNav().setRoot(pagina);
    return;
  }
// ###############################################


}
