import { Component, ViewChild} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private http: Http, private altr: AlertController) {
  
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
        this.dati_server = data.json(); 
        console.log(this.dati_server);

        if(this.dati_server!=null){
            this.utenti.push(new Utente(this.dati_server[0].email,this.dati_server[0].password,this.dati_server[0].nome_s,this.dati_server[0].componenti,this.dati_server[0].stato));
            if(this.dati_server[0].stato == 'approvato')
                this.navCtrl.push(HomePage);
            else this.presentConfirm('Richiesta in approvazione');
        }
        else this.presentConfirm('Non sei registrato'); 
       }, error => {
        console.log(error);// Error getting the data
      });
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

  constructor(email:string, password:string, nome_s:string, compo:number, stato:string){
    this.email = email;
    this.password = password;
    this.nome_s = nome_s;
    this.componenti = compo;
    this.stato = stato;
  }
}
