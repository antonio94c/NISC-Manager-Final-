import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-gestione-registrazione',
  templateUrl: 'gestione-registrazione.html',
})
export class GestioneRegistrazionePage {

  dati_server : any;
  utenti = [];
  email_a:string;
  password_a:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public str:Storage) {
    
    str.get('email').then((email) =>{
      this.email_a = email;
    });
    str.get('password').then((pass) =>{
      this.password_a = pass;
    });
    this.postRequest("","registrati");
  }

  postRequest(email:string, pass:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    let postParams = {
      email,
      pass
    };
    
    this.http.post("http://niscmanager.altervista.org/get_utenti.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data.json(); 
        console.log(this.dati_server);

        if(this.dati_server!=null){
          for(var i=0;i<this.dati_server.length;i++){
              this.utenti.push(new Utente(this.dati_server[i].email,this.dati_server[i].password,this.dati_server[i].nome_squadra,this.dati_server[i].componenti,this.dati_server[i].stato));
          }  
        }
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  updateStatus(utente:Utente, stato:string, ruolo:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    console.log(utente.email, stato);
    let postParams = {
      email:utente.email,
      stato,
      ruolo
    };
    
    this.http.post("http://niscmanager.altervista.org/update_status.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data;
        this.navCtrl.pop();
        this.navCtrl.push(this.navCtrl.getActive().component);
        console.log(this.dati_server);
       }, error => {
        console.log(error);// Error getting the data
      });}

}

class Utente{
  
   email: string;
   password: string;
   nome_s: string;
   componenti: number;
   stato: string;
  
    constructor(email:string, password:string, nome_s:string, compo:number, stato:string){
      this.email = email;
      this.password = password;
      this.nome_s = nome_s;
      this.componenti = compo;
      this.stato = stato;
    }
}
