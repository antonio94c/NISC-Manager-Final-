import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HomeAmmPage } from '../home-amm/home-amm';

/**
 * Generated class for the ModificaProfiloAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifica-profilo-admin',
  templateUrl: 'modifica-profilo-admin.html',
})
export class ModificaProfiloAdminPage {

  nome: string;
  email:string;
  password: string;
  componenti:number;
  ruolo:string;
  stato:string;
  nome_s:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public altr:AlertController, public http: Http) {
    this.nome=navParams.data.nome;
    this.email=navParams.data.email;
    this.password=navParams.data.password;
    this.componenti=navParams.data.componenti;
    this.ruolo=navParams.data.ruolo;
    this.nome_s=navParams.data.nome_s;
    this.stato = navParams.data.stato;

  }

  postRequest(email:string, stato:string, ruolo:string) {
    var headers = new Headers();
    let nome_squadra = this.nome_s;
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    let postParams = {
      nome_squadra,
      email,
      ruolo,
      stato
    };

    if(email == null || stato ==null || ruolo==null){
      this.presentConfirm("Ops... ci sono dei campi vuoti");
      return;
    }
    
    console.log(email, ruolo, stato, nome_squadra);

    this.http.post("http://niscmanager.altervista.org/update_utente.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        console.log(data['_body']);
        this.presentConfirm('Modifica Effettuata');
        this.navCtrl.setRoot(HomeAmmPage);
       }, error => {
        console.log(error);// Error getting the data
      });
  } 
  presentConfirm(text: string) {
    let alert = this.altr.create({
      title: 'Modifica Profilo',
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
