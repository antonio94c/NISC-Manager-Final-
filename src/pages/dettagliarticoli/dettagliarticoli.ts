import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DettagliArticoloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettagliarticoli',
  templateUrl: 'dettagliarticoli.html',
})
export class DettagliPage {

  id: number;
  nome: string;
  quantita: number;
  descrizione: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(navParams.data.nome);

    this.id=navParams.data.id;
    this.nome=navParams.data.nome;
    this.quantita=navParams.data.quantita;
    this.descrizione=navParams.data.descrizione;
  
  }

}
