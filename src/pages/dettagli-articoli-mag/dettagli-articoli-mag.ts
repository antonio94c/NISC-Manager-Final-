import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InserisciModificaArticoloPage } from '../inserisci-modifica-articolo/inserisci-modifica-articolo';


@IonicPage()
@Component({
  selector: 'page-dettagli-articoli-mag',
  templateUrl: 'dettagli-articoli-mag.html',
})
export class DettagliArticoliMagPage {

  articolo: Articolo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.articolo=navParams.data;
  
  }

  modifica(){
    this.navCtrl.push(InserisciModificaArticoloPage, this.articolo);
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