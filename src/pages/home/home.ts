import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { AboutPage } from '../about/about';
import { MymagazzinoPage } from '../mymagazzino/mymagazzino';
import { RichiesteMaterialePage } from '../richiestemateriale/richiestemateriale';
import { ProfiloUtentePage } from '../profilo/profilo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  viewCatalogo(){
    this.navCtrl.push(AboutPage);
  }

  viewMagazzino(){
    this.navCtrl.push(MymagazzinoPage);
  }

  viewRichiesta(){
    this.navCtrl.push(RichiesteMaterialePage);
  }

  viewProfilo(){
    this.navCtrl.push(ProfiloUtentePage);
  }
}
