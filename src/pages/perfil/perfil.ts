import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HistorialPage } from '../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad(titulo:string,) {
    console.log('ionViewDidLoad PerfilPage');
  }

  historial(){
    this.navCtrl.push(HistorialPage);
  }

  alertaCambiarNombre() {
    let alert = this.alertCtrl.create({
      title: 'Cambiar Nombre',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
        {
          name: 'apellido',
          placeholder: 'Apellido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            //PONER CODIGO DE GUARDADO

          }
        }
      ]
    });
    alert.present();
  }


  alertaCambiar(titulo:string, name:string, placeholder:string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      inputs: [
        {
          name: name,
          placeholder: placeholder
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            //PONER CODIGO DE GUARDADO

          }
        }
      ]
    });
    alert.present();
  }


  alertaCambiarPassword() {
    let alert = this.alertCtrl.create({
      title: "Cambiar Contraseña",
      inputs: [
        {
          name: "PasswordActual",
          placeholder: "Ingrese su contraseña actual"
        },
        {
          name: "Password",
          placeholder: "Ingrese una nueva contraseña"
        },
        {
          name: " RepetirPassword",
          placeholder: "Repita su nueva contraseña"
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            //PONER CODIGO DE GUARDADO

          }
        }
      ]
    });
    alert.present();
  }

}
