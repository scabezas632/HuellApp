import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CrearUsuarioPage, HomePage } from '../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  registro(){
    this.navCtrl.push(CrearUsuarioPage);
  }

  login(){
    // Pasar a la siguente pantalla y eliminar el login de la cola
    this.navCtrl.push(HomePage)
        .then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
  }

}
