import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { DettagliArticoliMagPage } from '../dettagli-articoli-mag/dettagli-articoli-mag';
import { InserisciModificaArticoloPage } from '../inserisci-modifica-articolo/inserisci-modifica-articolo';
import { EliminaArticoliPage } from '../elimina-articoli/elimina-articoli';
import { SpostaArticoliMagPage } from '../sposta-articoli-mag/sposta-articoli-mag';

@IonicPage()
@Component({
  selector: 'page-gestione-articoli-mag',
  templateUrl: 'gestione-articoli-mag.html',
})
export class GestioneArticoliMagPage {

  articoli = [];
  dati_server: any;
  titolo: String;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {

  }

  ionViewWillEnter(){
    var nome_mag=this.navParams.data.nome;
    this.titolo=nome_mag;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      nome_mag
    };
    this.http.post("http://niscmanager.altervista.org/get_articoli_post.php", JSON.stringify(postParams), options) 
    .subscribe(data => {
          this.dati_server = JSON.parse(data['_body']); 
          console.log(this.dati_server);

          if(this.dati_server!=null){
            this.articoli=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,nome_mag));
            }
          }
        });
  }

  dettagli(articolo: Articolo) {
    this.navCtrl.push(DettagliArticoliMagPage, articolo);
  }

  inserisci(){
    var valori=[];
    valori[0]="inserisci";
    valori[1]= this.navParams.data.nome;
    this.navCtrl.push(InserisciModificaArticoloPage, valori);
  }

  sposta(){
    this.navCtrl.push(SpostaArticoliMagPage, this.navParams.data.nome);
  }

  elimina(){
    this.navCtrl.push(EliminaArticoliPage, this.navParams.data.nome);
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
  