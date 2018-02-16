import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-inserisci-modifica-articolo',
  templateUrl: 'inserisci-modifica-articolo.html',
})
export class InserisciModificaArticoloPage {

  titolo_pagina="";
  articolo: Articolo;
  dati_server: any;
  next_id: number;
  magazzino: any;
  user: String;
  pass: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, public storage: Storage) {
    storage.get('email').then((val) => {
      this.user=val;
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });    
    this.articolo=new Articolo(null,null,null,null,null);
  }

  ionViewWillEnter(){
    var email=this.user;
    var password=this.pass;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers });
    
    if(this.navParams.data[0]=="inserisci"){
      this.magazzino=this.navParams.data[1];
      this.titolo_pagina="Inserisci articolo";
      let postParams = {
        email,
        password
      };
      this.http.post("http://niscmanager.altervista.org/get_info_articoli.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
            this.dati_server=JSON.parse(data['_body']);
            if(this.dati_server!=null){
              this.next_id=this.dati_server;
              this.next_id++;
            }
        });
    }else{
      this.titolo_pagina="Modifica articolo";
      this.articolo=this.navParams.data;
      this.next_id=this.articolo.id;
      this.magazzino=this.articolo.nome_magazzino;
      console.log(this.articolo.nome);
    }
  }

  salva(nome: String, quantita: String, descrizione: String, magazzino: String) {
    var email=this.user;
    var password=this.pass;
    if(nome=="" || quantita=="" || descrizione=="" || magazzino==""){
      console.log("vuoto");
      let alert = this.alertCtrl.create({
        title: 'Compila tutti i campi',
        subTitle: '',
        buttons: ['OK']
      });
      alert.present();
    }else{
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded' );
      let options = new RequestOptions({ headers: headers });
      if(this.navParams.data[0]=="inserisci"){
        let postParams = {
          email,
          password,
          nome,
          quantita,
          descrizione,
          magazzino
        };
        this.http.post("http://niscmanager.altervista.org/put_articolo.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
          if(data['_body']=="Operazione eseguita"){
            let alert = this.alertCtrl.create({
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
            alert.present();
          }else{
            let alert = this.alertCtrl.create({
              title: data['_body'],
              subTitle: '',
              buttons: ['Chiudi']
            });
            alert.present();
          }
        });
      }else{
        var id=this.articolo.id;
        let postParams = {
          email,
          password,
          id,
          nome,
          quantita,
          descrizione,
          magazzino
        };
        this.http.post("http://niscmanager.altervista.org/modifica_articolo.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
          if(data['_body']=="Operazione eseguita"){
            let alert = this.alertCtrl.create({
              title: 'Operazione completata',
              subTitle: '',
              buttons: [{
                text: 'Ok',
                handler: () => {
                  let navTransition = alert.dismiss();
                  navTransition.then(() => {
                      this.navCtrl.pop();
                      this.navCtrl.pop();
                    });
                  return false;
                }
              }]
            });
            alert.present();
          }else{
            let alert = this.alertCtrl.create({
              title: data['_body'],
              subTitle: '',
              buttons: ['Chiudi']
            });
            alert.present();
          }
        });
      }
    }
  }

}

class Articolo{
  id: number;
  nome: string;
  quantita: number;
  descrizione: string;
  nome_magazzino: string;

  constructor(id: number, nome: string, quantita: number, descrizione: string, nome_magazzino: string){
    this.id=id;
    this.nome=nome;
    this.quantita=quantita;
    this.descrizione=descrizione;
    this.nome_magazzino=nome_magazzino;
  }
}
