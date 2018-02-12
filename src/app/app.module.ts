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
import {HomeAmmPage} from '../pages/home-amm/home-amm';
import {GestioneRegistrazionePage} from '../pages/gestione-registrazione/gestione-registrazione';
import {EliminaMagazziniAdminPage} from '../pages/elimina-magazzini-admin/elimina-magazzini-admin';
import {GestioneArticoliAdminPage} from '../pages/gestione-articoli-admin/gestione-articoli-admin';
import {GestioneMagazziniAdminPage} from '../pages/gestione-magazzini-admin/gestione-magazzini-admin';
import {InserisciModificaMagazzinoPage} from '../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino';
import {HomeMagPage} from '../pages/home-mag/home-mag';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import {GestioneMagazziniMagPage} from '../pages/gestione-magazzini-mag/gestione-magazzini-mag';
import {RichiesteMaterialePage} from '../pages/richiestemateriale/richiestemateriale';
import {DettagliRichiestaPage} from '../pages/dettaglirichiesta/dettaglirichiesta';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistratiPage,
    RecuperaPasswordPage,
    HomePage,
    AboutPage,
    DettagliPage,
    MymagazzinoPage,
    HomeAmmPage,
    GestioneRegistrazionePage,
    EliminaMagazziniAdminPage,
    GestioneArticoliAdminPage,
    GestioneMagazziniAdminPage,
    InserisciModificaMagazzinoPage,
    GestioneMagazziniMagPage,
    HomeMagPage,
    RichiesteMaterialePage,
    DettagliRichiestaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    MymagazzinoPage,
    HomeAmmPage,
    GestioneRegistrazionePage,
    EliminaMagazziniAdminPage,
    GestioneArticoliAdminPage,
    GestioneMagazziniAdminPage,
    InserisciModificaMagazzinoPage,
    GestioneMagazziniMagPage,
    HomeMagPage,
    RichiesteMaterialePage,
    DettagliRichiestaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}