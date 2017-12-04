import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { RegistratiPage } from '../registrati/registrati';
import { RecuperaPasswordPage } from '../recupera-password/recupera-password';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  sign_up(){
    
    this.navCtrl.push(RegistratiPage);
    
  }

  recuperaPassword(){
    this.navCtrl.push(RecuperaPasswordPage);
  }

  enter(){
  this.navCtrl.push(HomePage);
  }
  
}
