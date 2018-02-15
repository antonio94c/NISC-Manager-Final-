import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { DettagliPage } from '../dettagliarticoli/dettagliarticoli';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mymagazzino',
  templateUrl: 'mymagazzino.html',
})
export class MymagazzinoPage{

  articoli = [];

  dati_server: any;

  user: string;
  pass: string;
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public storage: Storage) {
  
    //sessione: chi sei?  
    storage.get('email').then((val) => {
      this.user=val;  
      console.log("email1: "+ this.user);
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
    this.ionViewWillEnter();
  }

  itemSelected(articolo: Articolo) {
    console.log("Selected Item", articolo.nome);
    this.navCtrl.push(DettagliPage, articolo);
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

  ionViewWillEnter(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    
    //var nome_mag="squadra1"; 
    var email= this.user;
    var password= this.pass;
      let postParams = {
        email,
        password
      };
    
      console.log("email: "+ email);
      this.http.post("http://niscmanager.altervista.org/get_magazzino_post.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          

          console.log("ciao "+data['_body']);
          this.dati_server=JSON.parse(data['_body']);
          console.log("ciao dopo "+this.dati_server);
          if(this.dati_server!=null){
            this.articoli=[]; //aggiorna da zero la lista
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione, this.dati_server[i].magazzino));
            }
          }
        });
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
