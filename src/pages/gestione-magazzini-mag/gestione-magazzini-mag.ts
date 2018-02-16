import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { GestioneArticoliMagPage } from '../gestione-articoli-mag/gestione-articoli-mag';

@IonicPage()
@Component({
  selector: 'page-gestione-magazzini-mag',
  templateUrl: 'gestione-magazzini-mag.html',
})
export class GestioneMagazziniMagPage {

  magazzini = [];
  dati_server: any;
  user: String;
  pass: String;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
    storage.get('email').then((val) => {
      this.user=val;
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
  }

  ionViewWillEnter(){
    var email=this.user;
    var password=this.pass;
    this.magazzini=[];
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers }); 
    let postParams = {
      email,
      password
    };
    this.http.post("http://niscmanager.altervista.org/get_magazzini.php", JSON.stringify(postParams), options)
        .subscribe(data => {
          if(data['_body'][0]=="["){
            this.dati_server = JSON.parse(data['_body']); 
            if(this.dati_server!=null){
              for(var i=0;i<this.dati_server.length;i++){
                this.magazzini.push(new Magazzino(this.dati_server[i].nome,this.dati_server[i].descrizione));
              }
            }
          }else{
            let alert = this.alertCtrl.create({
              title: data['_body'],
              subTitle: '',
              buttons: ['OK']
            });
            alert.present();
          }
    });
  }

  mostra_articoli(magazzino: Magazzino){
    this.navCtrl.push(GestioneArticoliMagPage, magazzino);
  }

  initializeItems(){
    this.magazzini = [];
    for(var i=0;i<this.dati_server.length;i++){
      this.magazzini.push(this.dati_server[i]);
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.magazzini = this.magazzini.filter((magazzino) => {
        return (magazzino.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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

