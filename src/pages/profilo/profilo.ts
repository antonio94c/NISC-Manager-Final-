import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { LoginPage } from '../login/login';
import { ModificaPasswordPage } from '../modifica-password/modifica-password';

@IonicPage()
@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html',
})
export class ProfiloPage{

  email: string;
  password: string;
  nome_s: string;
  componenti: number;
  stato: string;
  ruolo: string;

  constructor(public navCtrl: NavController, public http:Http, public alert:AlertController, public storage: Storage) { 
    storage.get('email').then((val) => {
      this.email=val;
    });
    storage.get('password').then((val) => {
      this.password=val;
    });
    storage.get('nome_s').then((val) => {
      this.nome_s=val;
    });
    storage.get('componenti').then((val) => {
      this.componenti=val;
    });
    storage.get('stato').then((val) => {
      this.stato=val;
    });
    storage.get('ruolo').then((val) => {
      this.ruolo=val;
    });
  }

  goToModificaPassword(){
    this.navCtrl.push(ModificaPasswordPage);
   }

  presentConfirm(text: string) {
    let alert = this.alert.create({
      title: 'Login failed',
      message: text,
      buttons: [
       {
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
       },
      ]
   });
   alert.present();
  }
}
 