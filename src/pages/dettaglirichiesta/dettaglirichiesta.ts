import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HttpClient } from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
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

  /*id: number;
  stato: string;
  articolo: number;
  quantita_richiesta: number;
  quantita_approvata: number;*/
  

  richieste = [];
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
    
      ionViewWillEnter() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers }); 
  
       // var squadra="squadra1"; 
        var id= this.navParams.data;  
        var email= this.user;
        var password= this.pass;
  
  
        let postParams = {
          email,
          password,
          id
          
        };
        this.http.post("http://niscmanager.altervista.org/get_dettagli_richiesta.php", JSON.stringify(postParams), options)
          .subscribe(data => {
            console.log("ciao "+data['_body']);
            this.richieste_divise=JSON.parse(data['_body']);
            console.log("ciao dopo "+this.richieste_divise);
            if(this.richieste_divise!=null){
              for(var i=0;i<this.richieste_divise.length;i++){
                this.richieste.push(new Richiesta(this.richieste_divise[i].id,this.richieste_divise[i].stato,this.richieste_divise[i].articolo,this.richieste_divise[i].quantita_richiesta,this.richieste_divise[i].quantita_approvata, this.richieste_divise[i].nome_squadra));
              }
            }
          });
      }
  
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
  

