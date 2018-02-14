import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { GestioneMagazziniMagPage } from '../gestione-magazzini-mag/gestione-magazzini-mag';
import { GestioneArticoliMagPage } from '../gestione-articoli-mag/gestione-articoli-mag';
import { ProfiloUtentePage } from '../profilo/profilo';

@IonicPage()
@Component({
  selector: 'page-home-mag',
  templateUrl: 'home-mag.html',
})
export class HomeMagPage {

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  viewMagazzini(){
    this.navCtrl.push(GestioneMagazziniMagPage);
  }

  goToProfilo(){
    this.navCtrl.push(ProfiloUtentePage);
  }

}
