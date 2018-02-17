import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-modifica-password',
  templateUrl: 'modifica-password.html',
})
export class ModificaPasswordPage {
  //sessione variabili
  public email: string;
  public password: string; 
  public dati_server: any;

  constructor(public navCtrl: NavController, public http:Http, public alert:AlertController, public storage: Storage) {
  //sessione: chi sei?  
    storage.get('email').then((val) => {
      this.email=val;
    });
    storage.get('password').then((val) => {
      this.password=val;
    });
  }

   conferma_modifiche(pass:string, n_pass:string, c_pass:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

    //per la sessione gli devo passare le variabili dell'account per postParams
    var email= this.email;
    var password= this.password;
    console.log(password);

    if(pass==null || n_pass ==null || c_pass == null){
      this.presentConfirm("Opss... C'è qualche campo vuoto");
      return;
    }if(pass != password){
      this.presentConfirm("Password non corretta");
      return;
    }if(n_pass != c_pass){
      this.presentConfirm("Le password non corrispondono");
      return;
    }

    console.log(password,n_pass);

    let postParams = {
      email,
      password,
      n_pass
    };

    //POST
    this.http.post("http://niscmanager.altervista.org/modifica_profilo.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        console.log(data['_body']);
        this.presentConfirm('Password Modificata');
        this.navCtrl.setRoot(LoginPage);
      }, error => {
        this.presentConfirm('Ops... Qualcosa è andato storto');
    console.log(error);// Error getting the data
  });
}

presentConfirm(text: string) {
  let alert = this.alert.create({
    title: 'Modifica Password',
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
