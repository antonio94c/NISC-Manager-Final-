import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { DettagliRichiestaPage } from '../dettaglirichiesta/dettaglirichiesta';

/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-richiestemateriale',
  templateUrl: 'richiestemateriale.html',
})
export class RichiesteMaterialePage{

  richieste = [];

  dati_server: any;
  richieste_divise: any;

  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams,public storage: Storage) {
    
    //sessione: chi sei?  
    storage.get('email').then((val) => {
      this.user=val;  
      console.log("email1: "+ this.user);
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });

  }

  ionViewWillEnter(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
   // var squadra="squadra1"; 
    var email= this.user;
    var password= this.pass;
      let postParams = {
        
        email,
        password
      };
      this.http.post("http://niscmanager.altervista.org/get_richieste_inviate.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log("ciao "+data['_body']);
          this.dati_server=JSON.parse(data['_body']);
          console.log("ciao dopo "+this.dati_server);
          if(this.dati_server!=null){
            this.richieste=[]; //aggiorna da zero la lista
            for(var i=0;i<this.dati_server.length;i++){
              this.richieste.push(new Richiesta(this.dati_server[i].id,this.dati_server[i].stato,this.dati_server[i].articolo,this.dati_server[i].quantita_richiesta,this.dati_server[i].quantita_approvata,this.dati_server[i].nome_squadra));
            }
          }
        });
  }

  itemSelected(richiesta: Richiesta) {
    console.log("Selected Item", richiesta.stato);
  
    this.navCtrl.push(DettagliRichiestaPage, richiesta.id);
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
        return (richiesta.stato.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

class Richiesta{
  id: number;
  stato: string;
  articolo: number;
  quantita_richiesta: number;
  quantita_approvata:number;
  nome_squadra:string;
  

  constructor(id: number, stato: string,articolo:number, quantita_richiesta:number, quantita_approvata: number,nome_squadra:string){
    this.id=id;
    this.nome_squadra=nome_squadra;
    this.stato=stato;
    this.articolo=articolo;
    this.quantita_richiesta=quantita_richiesta;
    this.quantita_approvata=quantita_approvata;

    
  }
  
}
