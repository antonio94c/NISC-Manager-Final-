import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the DettagliArticoloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettaglirichiesta',
  templateUrl: 'dettaglirichiesta.html',
})
export class DettagliRichiestaPage {

  id: number;
  stato: string;
  articolo: number;
  quantita_richiesta: number;
  quantita_approvata: number;
  

 /* constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(navParams.data.stato);

    this.id=navParams.data.id;
    this.stato=navParams.data.stato;
    this.articolo=navParams.data.articolo;
    this.quantita_richiesta=navParams.data.quantita_richiesta;
    this.quantita_approvata=navParams.data.quantita_approvata;
    
  
  }*/

    richieste = [];
  
    //dati_server: any;
    richieste_divise: any;
  
    constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
      http.get('http://niscmanager.altervista.org/get_dettagli_richiesta.php?nome_squadra=squadra1')
      .subscribe(data => { 
              this.richieste_divise = data; 
              console.log(this.richieste_divise);
  
              if(this.richieste_divise!=null){
                for(var i=0;i<this.richieste_divise.length;i++){
                  this.richieste.push(new Richiesta(this.richieste_divise[i].id,this.richieste_divise[i].stato,this.richieste_divise[i].articolo,this.richieste_divise[i].quantita_richiesta,this.richieste_divise[i].quantita_approvata));
                }
              }
      },err => {
        console.log("Error occured");
      }); 
   
    }
  
   /* itemSelected(richiesta: Richiesta) {
      console.log("Selected Item", richiesta.stato);
      this.navCtrl.push(DettagliRichiestaPage, richiesta);
    }*/
  
    initializeItems(){
      this.richieste = [];
      for(var i=0;i<this.richieste_divise.length;i++){
        this.richieste.push(this.richieste_divise[i]);
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
  

//}
