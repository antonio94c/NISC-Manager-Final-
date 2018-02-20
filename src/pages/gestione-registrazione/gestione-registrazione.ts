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
  utenti_s = [];
  email_a:string;
  password_a:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public str:Storage) {
    
    str.get('email').then((email) =>{
      this.email_a = email;
    });
    str.get('password').then((pass) =>{
      this.password_a = pass;
    });
  }

  ionViewWillEnter(){
    var email = this.email_a;
    var pass = this.password_a;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    let postParams = {
      email,
      pass
    };
    
    this.http.post("http://niscmanager.altervista.org/get_richiedenti.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data.json(); 
        console.log(this.dati_server);

        this.utenti = [];
        if(this.dati_server!=null){
          for(var i=0;i<this.dati_server.length;i++){
              if(this.dati_server[i].ruolo != 'Amministratore')
                 this.utenti.push(new Utente(this.dati_server[i].email,this.dati_server[i].password,this.dati_server[i].nome_squadra,this.dati_server[i].componenti,this.dati_server[i].stato,this.dati_server[i].ruolo));
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
        this.ionViewWillEnter();
        console.log(this.dati_server);
       }, error => {
        console.log(error);// Error getting the data
      });
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
   ruolo:string;
  
    constructor(email:string, password:string, nome_s:string, compo:number, stato:string, ruolo:string){
      this.email = email;
      this.password = password;
      this.nome_s = nome_s;
      this.componenti = compo;
      this.stato = stato;
      this.ruolo = ruolo;
    }
}
