import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

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

  // MAPA JS
  @ViewChild('map') mapElement: ElementRef;
  // contiene todo lo del mapa
  map: any;
  // guarda la longitud y latitud actual
  loc:any;
  // guarda los marcadores
  marcadores:any[];

  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              private toastCtrl: ToastController) {

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
      // this.getLocation().then( res => {
        this.loc = new LatLng(position.coords.latitude, position.coords.longitude);
        // this.presentToast(this.loc);

        this.moveCamera(this.loc);

        this.map.clear();
        this.createMarker(this.loc, this.vehiculo).then((marker: Marker) => {
          marker.showInfoWindow();
        }).catch(err =>{
          console.log(err);
        })
      });
    });
  }

  initMap(){
    // Inicia el mapa
    let element = this.mapElement.nativeElement;
    this.map = this.googleMaps.create(element);
  }

  // getLocation(){
  //   // Obtiene la localizacion actual
  //   return this.geolocation.getCurrentPosition();
  // }

  // OPCIONES DE POSICION DEL MAPA
  moveCamera(loc: LatLng){
    let options: CameraPosition<any> = {
      // especificaciones del centro del mapa
      target: loc,
      zoom: 17,
      tilt: 10
    }
    this.map.moveCamera(options)
  }

  // Añadir marcador en el mapa
  createMarker(loc: LatLng, vehiculo: string){
    // Cambia la imagen del vehiculo según la seleccion
    let urlImage:any;
    if(vehiculo=="auto"){
      urlImage = './assets/img/auto.png';
    }else if(vehiculo=="bici"){
      urlImage = './assets/img/bici.png';
    }else if(vehiculo=="bus"){
      urlImage = './assets/img/bus.png';
    }else if(vehiculo=="metro"){
      urlImage = './assets/img/metro.png';
    }else if(vehiculo=="caminar"){
      urlImage = './assets/img/caminar.png';
    }
    const image = {
      url: urlImage,
      size: {
        width: 30,
        height: 30
      }
    };
    let markerOptions: MarkerOptions = {
      position: loc,
      icon: image
    };
    return this.map.addMarker(markerOptions);
  }

  onSegmentSelected(valor:string) {
    if(this.vehiculo!=valor){
      this.vehiculo = valor;
      // PONER AQUI EL CODIGO QUE HARA CUANDO CAMBIE DE VEHICULO
      this.map.clear();
      this.createMarker(this.loc, this.vehiculo);

      console.log(this.vehiculo)
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
      message: mensaje,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

  toast.present();
}



}
