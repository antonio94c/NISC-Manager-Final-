import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import {Storage} from '@ionic/storage';
import { DettagliPage } from '../dettagliarticoli/dettagliarticoli';

/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'about',
  templateUrl: 'about.html',
})
export class AboutPage{

  articoli = [];

  dati_server: any;
  quantita_articoli: number[];
  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams,public altr:AlertController,public storage: Storage) {
    //sessione: chi sei?  
    storage.get('email').then((val) => {
      this.user=val;  
      console.log("email1: "+ this.user);
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
  

    this.quantita_articoli=[this.articoli.length];
  }

  ionViewWillEnter(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    var email= this.user;
    var password= this.pass;
    var nome_mag="principale"; 
      let postParams = {
        nome_mag,
        email,
        password
      };
      this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log("ciao "+data['_body']);
          this.dati_server=JSON.parse(data['_body']);
          //this.dati_server = data.json();
          //console.log(this.dati_server);
          if(this.dati_server!=null){
            this.articoli=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,nome_mag));
            }
          }
        });
  }


  dettagli(articolo: Articolo) {
    console.log("Selected Item", articolo.quantita);
    this.navCtrl.push(DettagliPage, articolo);
  }
  reset(){
    for(var i=0; i<this.quantita_articoli.length; i++){
     this.quantita_articoli[i]=0;
    }
  }

  invia_richiesta(text: string){
    console.log("hai preso",this.quantita_articoli[0]);
    /*var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
 
    var email= this.user;
    var password= this.pass;
    var nome_mag="principale"; 
  
      let postParams = {
        nome_mag,
        email,
        password,
        
      };
      this.http.post("http://niscmanager.altervista.org/articoli_inviati.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          console.log("ciao "+data['_body']);
          this.dati_server=JSON.parse(data['_body']);
          if(this.dati_server!=null){
            this.articoli=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione));
            }
          }
        });*/
/* inviare con post i dati 
*/

    this.presentConfirm('con successo');
  }


  presentConfirm(text: string) {
    let alert = this.altr.create({
      title: 'Richiesta inviata',
      message: text,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present();
  }

  initializeItems(){
    this.articoli = [];
    for(var i=0;i<this.dati_server.length;i++){
      this.articoli.push(this.dati_server[i]);
    }
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.articoli = this.articoli.filter((articolo) => {
        return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}

class Articolo{
  id: number;
  nome: string;
  quantita: number;
  descrizione: string;
  nome_magazzino: string;

  constructor(id: number, nome: string, quantita: number, descrizione: string,nome_magazzino: string){
    //
    this.id=id;
    this.nome=nome;
    this.quantita=quantita;
    this.descrizione=descrizione;
    this.nome_magazzino=nome_magazzino;
  }
  
}
