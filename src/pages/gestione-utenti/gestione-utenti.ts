import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import {ModificaProfiloAdminPage} from '../modifica-profilo-admin/modifica-profilo-admin';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-gestione-utenti',
  templateUrl: 'gestione-utenti.html',
})
export class GestioneUtentiPage {

  public email:string;
  public password:string;
  public dati_server:any;
  public utenti = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http, public storage:Storage) {
    storage.get('email').then((val) => {
      this.email = val;
    });
    storage.get('password').then((val) => {
      this.password = val;
    });
    this.postRequest(this.email,this.password);
  }

  postRequest(email:string, pass:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

    let params = {
      email,
      pass,
    };
    
    this.http.post("http://niscmanager.altervista.org/get_richiedenti.php",JSON.stringify(params), options)
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

  initializeItems(){
    this.utenti = [];
    for(var i=0;i<this.dati_server.length;i++){
      if(this.dati_server[i].ruolo != 'Amministratore')
         this.utenti.push(new Utente(this.dati_server[i].email,this.dati_server[i].password,this.dati_server[i].nome_squadra,this.dati_server[i].componenti,this.dati_server[i].stato,this.dati_server[i].ruolo));
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.utenti = this.utenti.filter((search) => {
        return (search.nome_s.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
