import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CrearUsuarioPage, HomePage } from '../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  registro(){
    this.navCtrl.push(CrearUsuarioPage);
  }

  login(){
    this.navCtrl.push(HomePage);
  }

}
