import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-registrati',
  templateUrl: 'registrati.html'
})
export class RegistratiPage {

  constructor(public navCtrl: NavController, public http:Http) {

  }

  postRequest(nome_s: string, email:string, pass:string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    let postParams = {
      nome_s,
      email,
      pass
    };
    
    this.http.post("http://niscmanager.altervista.org/put_richiedente.php", JSON.stringify(postParams), options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  } 
}
