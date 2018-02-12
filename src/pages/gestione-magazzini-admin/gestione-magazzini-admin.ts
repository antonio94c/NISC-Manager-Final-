import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import { InserisciModificaMagazzinoPage } from '../inserisci-modifica-magazzino/inserisci-modifica-magazzino';
import { GestioneArticoliAdminPage } from '../gestione-articoli-admin/gestione-articoli-admin';
import { EliminaMagazziniAdminPage } from '../elimina-magazzini-admin/elimina-magazzini-admin';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-gestione-magazzini-admin',
  templateUrl: 'gestione-magazzini-admin.html',
})
export class GestioneMagazziniAdminPage {

  magazzini = [];
  dati_server: any;
  email: String;
  password: String;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public storage: Storage) {
    storage.set('email','pippopluto92@gmail.com');
    storage.set('password','pippopluto');

    storage.get('email').then((val) => {
      this.email=val;
    });
    storage.get('password').then((val) => {
      this.password=val;
    });
  }

  ionViewWillEnter(){
    var user=this.email;
    var pass=this.password;
    this.magazzini=[];
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    let postParams = {
      user,
      pass
    };
    this.http.post("http://niscmanager.altervista.org/get_magazzini.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
          this.dati_server = JSON.parse(data['_body']); 
          if(this.dati_server!=null){
            for(var i=0;i<this.dati_server.length;i++){
              this.magazzini.push(new Magazzino(this.dati_server[i].nome,this.dati_server[i].descrizione));
            }
          }
    });
  }

  modifica(magazzino: Magazzino) {
    console.log("Selected Item", magazzino.nome);
    this.navCtrl.push(InserisciModificaMagazzinoPage, magazzino);
  }

  inserisci() {
    this.navCtrl.push(InserisciModificaMagazzinoPage, "inserisci");
  }

  mostra_articoli(magazzino: Magazzino){
    this.navCtrl.push(GestioneArticoliAdminPage, magazzino);
  }

  //bisogna selezionare quelli da eliminare
  elimina() {
    console.log("Selected Item");
    this.navCtrl.push(EliminaMagazziniAdminPage, this.magazzini);
  }

  initializeItems(){
    this.magazzini = [];
    for(var i=0;i<this.dati_server.length;i++){
      this.magazzini.push(this.dati_server[i]);
    }
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.magazzini = this.magazzini.filter((magazzino) => {
        return (magazzino.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
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
