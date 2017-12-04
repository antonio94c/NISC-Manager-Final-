import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { AboutPage } from '../about/about';
import { MymagazzinoPage } from '../mymagazzino/mymagazzino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout(){
    this.navCtrl.push(LoginPage);
  }

  viewCatalogo(){
    this.navCtrl.push(AboutPage);
  }

  viewMagazzino(){
    this.navCtrl.push(MymagazzinoPage);
  }

}
