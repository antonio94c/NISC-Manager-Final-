import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import {ModificaProfiloAdminPage} from '../modifica-profilo-admin/modifica-profilo-admin';

@IonicPage()
@Component({
  selector: 'page-gestione-utenti',
  templateUrl: 'gestione-utenti.html',
})
export class GestioneUtentiPage {

  dati_server:any;
  utenti = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.postRequest("","registrazione");
  }

  postRequest(email:string, pass:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

    let params = {
      email,
      pass
    };
    
    this.http.post("http://niscmanager.altervista.org/get_utenti.php",JSON.stringify(params), options)
      .subscribe(data => {
        this.dati_server = data.json(); 
        console.log(this.dati_server);

        if(this.dati_server!=null){
          for(var i=0;i<this.dati_server.length;i++){
            if(this.dati_server[i].ruolo != 'Amministratore')
               this.utenti.push(new Utente(this.dati_server[i].email,this.dati_server[i].password, this.dati_server[i].nome_squadra,this.dati_server[i].componenti,this.dati_server[i].stato,this.dati_server[i].ruolo));
          }
        }
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  goToModified(utente:Utente){
    this.navCtrl.push(ModificaProfiloAdminPage,utente);

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
