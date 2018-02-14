import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profilo-admin',
  templateUrl: 'profilo-admin.html',
})
export class ProfiloAdminPage {

  mail:string;
  password:string;
  stato:string;
  ruolo:string;
  compo:number;
  nome:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mail = navParams.data.email;
    this.password = navParams.data.password;
    this.stato = navParams.data.stato;
    this.ruolo = navParams.data.ruolo;
    this.compo = navParams.data.componenti;
    this.nome = navParams.data.nome_s;
  }

}
