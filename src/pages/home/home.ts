import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PerfilPage, ResultadosPage } from '../../pages/index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isPlay:boolean = false;
  vehiculo: string = 'auto';

  constructor(public navCtrl: NavController) {

  }

  onSegmentSelected(valor:string) {
    if(this.vehiculo!=valor){
      this.vehiculo = valor;
      console.log(this.vehiculo)
    }
  }

  comenzar(){
    this.isPlay = !this.isPlay;

    if(!this.isPlay){
      this.navCtrl.push(ResultadosPage);
    }

  }

  settings(){
    this.navCtrl.push(PerfilPage);
  }

}
