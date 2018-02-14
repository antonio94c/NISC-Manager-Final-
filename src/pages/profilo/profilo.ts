import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html',
})
export class ProfiloUtentePage{
//sessione variabili
  email: string;
  password: string; 

  constructor(public navCtrl: NavController, public http:Http, public alert:AlertController, public storage: Storage) {
  //sessione: chi sei?  
    storage.get('email').then((val) => {
      this.email=val;
    });
    storage.get('password').then((val) => {
      this.password=val;
    });
  }

   conferma_modifiche(pa:string, mp:string, cp:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

 //per la sessione gli devo passare le variabili dell'account per postParams
    var email= this.email;
    var password= this.password;

    let postParams = {
      email, 
      password,
      pa,
      mp,
      cp
    };

    //POST
    this.http.post("http://niscmanager.altervista.org/modifica_profilo.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        console.log(data['_body']);
      
    //controllo modifica pw
    if(mp == cp && password==pa) {
     var alert = this.alert.create({
      title: 'titolo',
      subTitle: 'sottotitolo',
      buttons: ['Dismiss']
    });
    if(data['_body']=="Records updated successfully."){
      alert = this.alert.create({
        title: 'Operazione completata',
        subTitle: '',
        buttons: [{
          text: 'Ok',
          handler: () => {
            let navTransition = alert.dismiss();
            navTransition.then(() => {
                this.navCtrl.pop();
              });
            return false;
          }
        }]
      });
    }else{
      alert = this.alert.create({
        title: data['_body'],
        subTitle: '',
        buttons: ['Chiudi']
      });
    }
    alert.present();
  }}, error => {
    console.log(error);// Error getting the data
  });
}
  
}
 