import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {RegistratiPage} from '../pages/registrati/registrati';
import {RecuperaPasswordPage} from '../pages/recupera-password/recupera-password';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {HomePage} from '../pages/home/home';
import {AboutPage} from '../pages/about/about';
import {DettagliPage} from '../pages/dettagliarticoli/dettagliarticoli';
import {MymagazzinoPage} from '../pages/mymagazzino/mymagazzino';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistratiPage,
    RecuperaPasswordPage,
    HomePage,
    AboutPage,
    DettagliPage,
    MymagazzinoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistratiPage,
    RecuperaPasswordPage,
    HomePage,
    AboutPage,
    DettagliPage,
    MymagazzinoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}