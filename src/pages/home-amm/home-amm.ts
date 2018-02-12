import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { GestioneRegistrazionePage } from '../gestione-registrazione/gestione-registrazione';
import {GestioneMagazziniAdminPage} from '../gestione-magazzini-admin/gestione-magazzini-admin';

/**
 * Generated class for the HomeAmmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-amm',
  templateUrl: 'home-amm.html',
})
export class HomeAmmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  viewMagazzini(){
    this.navCtrl.push(GestioneMagazziniAdminPage);
  }
}