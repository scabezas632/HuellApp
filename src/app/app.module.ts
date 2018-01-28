import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// PAGES
import { CrearUsuarioPage,
         LoginPage,
         HomePage,
         PerfilPage,
         HistorialPage,
         ResultadosPage,
         ViajePage} from '../pages/index.paginas';

// MAPA
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    CrearUsuarioPage,
    LoginPage,
    HomePage,
    PerfilPage,
    HistorialPage,
    ResultadosPage,
    ViajePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CrearUsuarioPage,
    LoginPage,
    HomePage,
    PerfilPage,
    HistorialPage,
    ResultadosPage,
    ViajePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
