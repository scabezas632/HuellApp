import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PerfilPage } from '../../pages/index.paginas';


@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

  settings(){
    this.navCtrl.push(PerfilPage);
  }

}
