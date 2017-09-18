import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PerfilPage } from '../../pages/index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isPlay:boolean = false;

  constructor(public navCtrl: NavController) {

  }

  comenzar(){
    this.isPlay = !this.isPlay;
  }

  settings(){
    this.navCtrl.push(PerfilPage);
  }

}
