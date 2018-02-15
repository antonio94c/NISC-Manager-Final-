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
import {EmailComposer}  from '@ionic-native/email-composer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import {GestioneMagazziniMagPage} from '../pages/gestione-magazzini-mag/gestione-magazzini-mag';
import {RichiesteMaterialePage} from '../pages/richiestemateriale/richiestemateriale';
import {DettagliRichiestaPage} from '../pages/dettaglirichiesta/dettaglirichiesta';
import {GestioneUtentiPage} from '../pages/gestione-utenti/gestione-utenti';
import {ModificaProfiloAdminPage} from '../pages/modifica-profilo-admin/modifica-profilo-admin';
import {DettagliArticoliMagPage} from '../pages/dettagli-articoli-mag/dettagli-articoli-mag';
import {EliminaArticoliPage} from '../pages/elimina-articoli/elimina-articoli';
import {GestioneArticoliMagPage} from '../pages/gestione-articoli-mag/gestione-articoli-mag';
import {InserisciModificaArticoloPage} from '../pages/inserisci-modifica-articolo/inserisci-modifica-articolo';
import {SpostaArticoliMagPage} from '../pages/sposta-articoli-mag/sposta-articoli-mag';
import {ProfiloPage} from '../pages/profilo/profilo';
import {ModificaPasswordPage} from '../pages/modifica-password/modifica-password';


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
    DettagliRichiestaPage,
    GestioneUtentiPage,
    ModificaProfiloAdminPage,
    DettagliArticoliMagPage,
    EliminaArticoliPage,
    GestioneArticoliMagPage,
    InserisciModificaArticoloPage,
    SpostaArticoliMagPage,
    ProfiloPage,
    ModificaPasswordPage
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
    DettagliRichiestaPage,
    GestioneUtentiPage,
    ModificaProfiloAdminPage,
    DettagliArticoliMagPage,
    EliminaArticoliPage,
    GestioneArticoliMagPage,
    InserisciModificaArticoloPage,
    SpostaArticoliMagPage,
    ProfiloPage,
    ModificaPasswordPage
  ],
  providers: [
    StatusBar,
    EmailComposer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}