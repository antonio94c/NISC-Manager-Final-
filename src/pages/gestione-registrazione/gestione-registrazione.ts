import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-gestione-registrazione',
  templateUrl: 'gestione-registrazione.html',
})
export class GestioneRegistrazionePage {

  dati_server : any;
  utenti = [];
  email:null;
  pass:null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.postRequest("",""); 
  }

  postRequest(email:string, pass:string){
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

        if(this.dati_server!=null){
          for(var i=0;i<this.dati_server.length;i++){
              this.utenti.push(new Utente(this.dati_server[i].email,this.dati_server[i].password,this.dati_server[i].nome_s,this.dati_server[i].componenti,this.dati_server[i].stato));
          }  
        }
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  updateStatus(utente:Utente, st:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    console.log(utente.email, st);
    let postParams = {
      email:utente.email,
      st
    };
    
    this.http.post("http://niscmanager.altervista.org/update_status.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data;
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
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
