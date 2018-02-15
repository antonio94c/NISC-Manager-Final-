import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-registrati',
  templateUrl: 'registrati.html'
})
export class RegistratiPage {
  
  public dati_server:any;

  constructor(public navCtrl: NavController, public http:Http, public altr:AlertController) {

  }

  postRequest(nome_s: string, email:string, pass:string, ruolo:string,conf_pass:string,compo:number) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

    if(nome_s == null || email == null || pass == null || ruolo==null || conf_pass == null || compo == null){
      this.presentConfirm("Inserisci tutti i campi");
      return;
    }

    let postParams = {
      nome_s,
      email,
      pass,
      ruolo,
      compo
    };

    if(pass != conf_pass){
      this.presentConfirm("Le password non corrispondono");
      this.navCtrl.setRoot(LoginPage);
      return;
    }
    
    this.http.post("http://niscmanager.altervista.org/put_richiedente.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data.json();

        if(this.dati_server == 'ERROR: Could not able to execute'){
          this.presentConfirm("Email già presente nel sistema");
          this.navCtrl.setRoot(LoginPage);
        }else{
          this.presentConfirm("Richiesta Inoltrata, attendi l''approvazione dell''amministratore");
          this.navCtrl.setRoot(LoginPage);
        }
       }, error => {
        console.log(error);// Error getting the data
      });
  } 

  presentConfirm(text: string) {
    let alert = this.altr.create({
      title: 'Registrazione',
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
