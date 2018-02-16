import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

import {DettagliRichiestaMagPage} from '../dettagli-richiesta-mag/dettagli-richiesta-mag';

@IonicPage()
@Component({
  selector: 'page-gestione-richieste-mag',
  templateUrl: 'gestione-richieste-mag.html',
})
export class GestioneRichiesteMagPage {

  richieste = [];
  dati_server: any;
  user: String;
  pass: String;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public storage: Storage) {
    storage.get('email').then((val) => {
      this.user=val;
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
  }

  ionViewWillEnter(){
    var email=this.user;
    var password=this.pass;
    this.richieste=[];
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    let postParams = {
      email,
      password
    };
    this.http.post("http://niscmanager.altervista.org/get_richieste_mag.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log(data['_body']);
          this.dati_server = JSON.parse(data['_body']); 
          if(this.dati_server!=null){
            for(var i=0;i<this.dati_server.length;i++){
              this.richieste.push(new Richiesta(this.dati_server[i].id,this.dati_server[i].squadra,this.dati_server[i].stato));
            }
          }
    });
  }

  gestisci(richiesta: Richiesta){
    if(richiesta.stato=="in attesa"){
      var valori=[];
      valori[0]=richiesta.id;
      valori[1]=richiesta.squadra;
      this.navCtrl.push(DettagliRichiestaMagPage,valori);
    }else{
      
    }
  }

  initializeItems(){
    this.richieste = [];
    for(var i=0;i<this.dati_server.length;i++){
      this.richieste.push(this.dati_server[i]);
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.richieste = this.richieste.filter((richiesta) => {
        return (richiesta.squadra.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

class Richiesta{
  id: string;
  squadra: string;
  stato: string;

  constructor(id: string, squadra: string, stato: string){
    this.id=id;
    this.squadra=squadra;
    this.stato=stato;
  }
}

