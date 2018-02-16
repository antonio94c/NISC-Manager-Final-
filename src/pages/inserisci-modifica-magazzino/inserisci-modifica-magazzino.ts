import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-inserisci-modifica-magazzino',
  templateUrl: 'inserisci-modifica-magazzino.html',
})
export class InserisciModificaMagazzinoPage {

  titolo_pagina="";
  magazzino: Magazzino;
  user: String;
  pass: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, public storage: Storage) {
    storage.get('email').then((val) => {
      this.user=val;
    });
    storage.get('password').then((val) => {
      this.pass=val;
    }); 

    if(navParams.data=="inserisci"){
      this.titolo_pagina="Inserisci magazzino";
      this.magazzino=new Magazzino(null,null);
    }else{
      this.titolo_pagina="Modifica magazzino";

      this.magazzino=navParams.data;
      console.log(this.magazzino.nome);
    }
  }

  salva(nome: String, descrizione: String) {
    var email=this.user;
    var password=this.pass;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    if(this.navParams.data=="inserisci"){
      let postParams = {
        email,
        password,
        nome,
        descrizione
      };
      this.http.post("http://niscmanager.altervista.org/put_magazzino.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
          var alert = this.alertCtrl.create({
            title: 'titolo',
            subTitle: 'sottotitolo',
            buttons: ['Dismiss']
          });
          if(data['_body']=="Records inserted successfully."){
            alert = this.alertCtrl.create({
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
            alert = this.alertCtrl.create({
              title: data['_body'],
              subTitle: '',
              buttons: ['Chiudi']
            });
          }
          alert.present();
        }, error => {
          console.log(error);// Error getting the data
        });
    }else{
      let vecchio_nome=this.magazzino.nome;
      let postParams = {
        email,
        password,
        vecchio_nome,
        nome,
        descrizione
      };
      this.http.post("http://niscmanager.altervista.org/modifica_magazzino.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
          var alert = this.alertCtrl.create({
            title: 'titolo',
            subTitle: 'sottotitolo',
            buttons: ['Dismiss']
          });
          if(data['_body']=="Records updated successfully."){
            alert = this.alertCtrl.create({
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
            alert = this.alertCtrl.create({
              title: data['_body'],
              subTitle: '',
              buttons: ['Chiudi']
            });
          }
          alert.present();
        }, error => {
          console.log(error);// Error getting the data
        });
    }
  }

}

class Magazzino{
  nome: string;
  descrizione: string;

  constructor(nome: string, descrizione: string){
    this.nome=nome;
    this.descrizione=descrizione;
  }
  
}
