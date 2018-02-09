import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { RegistratiPage } from '../registrati/registrati';
import { RecuperaPasswordPage } from '../recupera-password/recupera-password';
import { HomePage } from '../home/home';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'page-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  dati_server:any;
  utenti=[];

  constructor(public navCtrl: NavController, private http: Http) {
  
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
    
    this.http.post("http://niscmanager.altervista.org/get_richiedenti.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data; 
        console.log(this.dati_server);

        if(this.dati_server!=null){
          for(var i=0;i<this.dati_server.length;i++){
            this.utenti.push(new Utente(this.dati_server[i].nome_sq,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,"principale"));
          }
        }
       }, error => {
        console.log(error);// Error getting the data
      });
  } 
}

class Utente{
  nome_squadra:string;
  nome_richiedente:string;
  email: string;
  password: string;
  ruolo: string;

  constructor(nome_sq:string, nome_ri:string, email:string, password:string, ruolo:string){
    this.nome_squadra = nome_sq;
    this.nome_richiedente = nome_ri;
    this.email = email;
    this.password = password;
    this.ruolo = ruolo;
  }
}
