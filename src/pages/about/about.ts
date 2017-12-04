import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
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

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
    http.get('http://niscmanager.altervista.org/get_articoli.php?magazzino=principale')
    .subscribe(data => { 
            this.dati_server = data; 
            console.log(this.dati_server);

            if(this.dati_server!=null){
              for(var i=0;i<this.dati_server.length;i++){
                this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,"principale"));
              }
            }
    },err => {
      console.log("Error occured");
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
