import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CrearUsuarioPage,
         LoginPage,
         HomePage,
         PerfilPage,
         SplashScreenPage} from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    CrearUsuarioPage,
    LoginPage,
    HomePage,
    PerfilPage,
    SplashScreenPage
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
    SplashScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
