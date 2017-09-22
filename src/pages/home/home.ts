import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/filter'

// PAGES
import { PerfilPage, ResultadosPage } from '../../pages/index.paginas';

// MAPS
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap,
         GoogleMapsEvent, LatLng,
         CameraPosition, MarkerOptions,
         Marker } from '@ionic-native/google-maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isPlay:boolean = false;
  vehiculo: string = 'auto';
  urlImage:string = './assets/img/auto.png';

  // Variable que controla si desea cambiar de vehiculo
  cambioVehiculo:boolean = false;

  // MAPA JS
  @ViewChild('map') mapElement: ElementRef;
  // contiene todo lo del mapa
  map: any;
  // guarda la longitud y latitud actual
  loc:any;
  // guarda los marcadores
  marcadores:any[];
  private selfmarker: Marker;

  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController) {

  }

  ionViewDidLoad(){

  }

  ngAfterViewInit(){

    this.initMap();
    // Opciones del watchPosition
    let options = {enableHighAccuracy: true};
    // una vez que el mapa está listo,
    // se mueve a la posicion de la camara
    this.map.one(GoogleMapsEvent.MAP_READY).then( () => {
      // Obtiene la localizacion del usuario actual mientras se mueve
      this.geolocation.watchPosition(options).subscribe((position) => {

        this.loc = new LatLng(position.coords.latitude, position.coords.longitude);
        // this.presentToast(this.loc);

        this.moveCamera(this.loc);

        // Cambia la imagen del vehiculo según la seleccion
        if(this.vehiculo=="auto"){
          this.urlImage = './assets/img/auto.png';
        }else if(this.vehiculo=="bici"){
          this.urlImage = './assets/img/bici.png';
        }else if(this.vehiculo=="bus"){
          this.urlImage = './assets/img/bus.png';
        }else if(this.vehiculo=="metro"){
          this.urlImage = './assets/img/metro.png';
        }else if(this.vehiculo=="caminar"){
          this.urlImage = './assets/img/caminar.png';
        }

        if (this.selfmarker != null) {
            this.selfmarker.setPosition(this.loc);
            this.map.addMarker(this.selfmarker);
        } else {
            let markerIcon = {
                'url': this.urlImage,
                'size': {
                    width: 30,
                    height: 30,
                }
            }
            let markerOptions: MarkerOptions = {
                position: this.loc,
                icon: markerIcon
            };
           this.map.addMarker(markerOptions).then((marker) => {
             this.selfmarker = marker;
           }, (error) => {
                 console.log(error);
          });
        }
      });
    }, (error) => {
          console.log(error);
   });
  }

  initMap(){
    // Inicia el mapa
    let element = this.mapElement.nativeElement;
    this.map = this.googleMaps.create(element);
  }

  // OPCIONES DE POSICION DEL MAPA
  moveCamera(loc: LatLng){
    let options: CameraPosition<any> = {
      // especificaciones del centro del mapa
      target: loc,
      zoom: 18,
      tilt: 10
    }
    this.map.moveCamera(options)
  }

  // Añadir marcador en el mapa
  createMarker(loc: LatLng){

    const image = {
      url: './assets/img/auto.png',
      size: {
        width: 30,
        height: 30
      }
    };
    let markerOptions: MarkerOptions = {
      position: loc,
      icon: image
    };
    this.map.addMarker(markerOptions).then((marker) => {
      this.selfmarker = marker;
    }, (error) => {
        console.log(error);
    });
  }

  onSegmentSelected(valor:string) {
    if(this.vehiculo!=valor){
      // PONER AQUI EL CODIGO QUE HARA CUANDO CAMBIE DE VEHICULO

      // this.alertaCambioVehiculo();
      // if(this.cambioVehiculo==true){

        this.vehiculo = valor;
        this.cambioVehiculo = false;
        // this.presentToast(this.cambioVehiculo);
        this.map.clear();
        // Cambia la imagen del vehiculo según la seleccion
        if(this.vehiculo=="auto"){
          this.urlImage = './assets/img/auto.png';
        }else if(this.vehiculo=="bici"){
          this.urlImage = './assets/img/bici.png';
        }else if(this.vehiculo=="bus"){
          this.urlImage = './assets/img/bus.png';
        }else if(this.vehiculo=="metro"){
          this.urlImage = './assets/img/metro.png';
        }else if(this.vehiculo=="caminar"){
          this.urlImage = './assets/img/caminar.png';
        }
        let markerIcon = {
          'url': this.urlImage,
          'size': {
            width: 30,
            height: 30,
          }
        }
        let markerOptions: MarkerOptions = {
          position: this.loc,
          icon: markerIcon
        };
        this.map.addMarker(markerOptions).then((marker) => {
          this.selfmarker = marker;
        }, (error) => {
            console.log(error);
        });
      // }
    }
  }

  comenzar(){
    this.isPlay = !this.isPlay;
    if(this.isPlay){
      // PONER AQUI EL CODIGO QUE HARA CUANDO PONGA PLAY
    }else if(!this.isPlay){
      // PONER AQUI EL CODIGO QUE HARA CUANDO PONGA STOP
      this.navCtrl.push(ResultadosPage);
    }

  }

  settings(){
    this.navCtrl.push(PerfilPage);
  }


  presentToast(mensaje:any) {
    let toast = this.toastCtrl.create({
      message: "Cambio de vehiculo: "+mensaje,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  alertaCambioVehiculo() {
    let alert = this.alertCtrl.create({
      title: 'CONFIRMACIÓN',
      message: '¿Seguro que desea cambiar de vehiculo?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Si',
          handler: () => {
            this.cambioVehiculo = true;
          }
        }
      ]
    });
    alert.present();
  }



}
