import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginPage } from '../login/login';
import {EmailComposer} from '@ionic-native/email-composer';
 
@Component({
  selector: 'page-recupera-password',
  templateUrl: 'recupera-password.html'
})
export class RecuperaPasswordPage {

  dati_server:any;

  constructor(public navCtrl: NavController, public http:Http, public altr:AlertController, public emailComposer:EmailComposer) {

  }

  postRequest(email:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      email,
    };

    if(email == null){
      this.presentConfirm("Inserire email");
      return;
    }
 
    this.http.post("http://niscmanager.altervista.org/email_forward.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        this.dati_server = data.json(); 
        console.log(this.dati_server);

        if(this.dati_server!=null){
          if(this.dati_server[0]=='Email Inviata')
             this.presentConfirm("Ti è stata inviata una mail per il recupero password. \n" + "Controlla la casella di posta elettronica");
          else if(this.dati_server[0]=='Email non inviata')
                 this.presentConfirm("Email non presente");
        }
        this.navCtrl.setRoot(LoginPage);
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
