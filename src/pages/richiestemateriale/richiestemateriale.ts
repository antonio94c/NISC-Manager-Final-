import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
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

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
    http.get('http://niscmanager.altervista.org/get_richieste_inviate.php?nome_squadra=squadra1')
    .subscribe(data => { 
            this.dati_server = data; 
            console.log(this.dati_server);

            if(this.dati_server!=null){
              for(var i=0;i<this.dati_server.length;i++){
                this.richieste.push(new Richiesta(this.dati_server[i].id,this.dati_server[i].stato,this.dati_server[i].articolo,this.dati_server[i].quantita_richiesta,this.dati_server[i].quantita_approvata));
              }
            }
    },err => {
      console.log("Error occured");
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
  

  constructor(id: number, stato: string,articolo:number, quantita_richiesta:number, quantita_approvata: number){
    this.id=id;
  
    this.stato=stato;
    this.articolo=articolo;
    this.quantita_richiesta=quantita_richiesta;
    this.quantita_approvata=quantita_approvata;

    
  }
  
}
