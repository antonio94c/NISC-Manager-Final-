import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { DettagliPage } from '../dettagliarticoli/dettagliarticoli';

/**
 * Generated class for the GestioneArticoliAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestione-articoli-admin',
  templateUrl: 'gestione-articoli-admin.html',
})
export class GestioneArticoliAdminPage {

  articoli = [];
  dati_server: any;
  totale_articoli=0;
  titolo: String;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    var nome_mag=navParams.data.nome;
    this.titolo=nome_mag;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      nome_mag
    };
    this.http.post("http://niscmanager.altervista.org/get_articoli_post.php", JSON.stringify(postParams), options) 
    .subscribe(data => {
          this.dati_server = JSON.parse(data['_body']); 
          console.log(this.dati_server);

          if(this.dati_server!=null){
            for(var i=0;i<this.dati_server.length;i++){
              this.totale_articoli+=parseInt(this.dati_server[i].quantita);
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,"principale"));
            }
          }
        });
  }

  dettagli(articolo: Articolo) {
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

class Magazzino{
  nome: string;
  descrizione: string;

  constructor(nome: string, descrizione: string){
    this.nome=nome;
    this.descrizione=descrizione;
  }
}
  