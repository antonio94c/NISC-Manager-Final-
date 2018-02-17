import { Component, ViewChild} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistratiPage } from '../registrati/registrati';
import { RecuperaPasswordPage } from '../recupera-password/recupera-password';
import { HomePage } from '../home/home';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HomeAmmPage } from '../home-amm/home-amm';
import {HomeMagPage} from '../home-mag/home-mag';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  dati_server : any;
  utenti = [];

  constructor(public navCtrl: NavController, private http: Http, private altr: AlertController, public str:Storage) {
  
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

  postRequest(email:string, pass:string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    let postParams = {
      email,
      pass
    };

    if(email == null){
      this.presentConfirm("Inserire email");
      return;
    }if(pass == null){
      this.presentConfirm("Inserire password");
      return;
    }
    
    this.http.post("http://niscmanager.altervista.org/get_utenti.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data.json(); 
        console.log(this.dati_server);
        
        if(this.dati_server!=null){
            this.utenti.push(new Utente(this.dati_server[0].email,this.dati_server[0].password,this.dati_server[0].nome_squadra,this.dati_server[0].componenti,this.dati_server[0].stato, this.dati_server[0].ruolo));
            if(this.dati_server[0].ruolo == 'Amministratore'){
              this.navCtrl.setRoot(HomeAmmPage);
              this.setParams(this.utenti[0]);
            }
            else
            if(this.dati_server[0].stato == 'approvato'){
               if(this.dati_server[0].ruolo == 'Magazziniere'){
                  this.navCtrl.setRoot(HomeMagPage);
                  this.setParams(this.utenti[0]);
                  
               }
               if(this.dati_server[0].ruolo == 'Richiedente'){
                  this.navCtrl.setRoot(HomePage);
                  this.setParams(this.utenti[0]);
               }
            }
            else this.presentConfirm('Richiesta in approvazione');
        }
        else this.presentConfirm('Non sei registrato'); 
       }, error => {
        console.log(error);// Error getting the data
      });
  }
  
  setParams(utente:Utente){
    this.str.set('email', utente.email);
    this.str.set('password', utente.password);
    this.str.set('nome_s',utente.nome_s);
    this.str.set('componenti',utente.componenti);
    this.str.set('stato',utente.stato);
    this.str.set('ruolo',utente.ruolo);
  }

  goToHomeAmm(){
    this.navCtrl.setRoot(HomeAmmPage);
  }

  goToHomeRic(){
    this.navCtrl.setRoot(HomePage);
  }

  goToHomeMag(){
    this.navCtrl.setRoot(HomeMagPage);
  }

  presentConfirm(text: string) {
    let alert = this.altr.create({
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

class Utente{

 email: string;
 password: string;
 nome_s: string;
 componenti: number;
 stato: string;
 ruolo: string;

  constructor(email:string, password:string, nome_s:string, compo:number, stato:string, ruolo:string){
    this.email = email;
    this.password = password;
    this.nome_s = nome_s;
    this.componenti = compo;
    this.stato = stato;
    this.ruolo = ruolo;
  }
}
