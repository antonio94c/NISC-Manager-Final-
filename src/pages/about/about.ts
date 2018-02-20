import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import {Storage} from '@ionic/storage';
import { DettagliPage } from '../dettagliarticoli/dettagliarticoli';


@IonicPage()
@Component({
  selector: 'about',
  templateUrl: 'about.html',
})
export class AboutPage{

  articoli = [];
  richieste=[];
  dati_server: any;
  quantita_articoli= [];
  user: string;
  pass: string;
  nome_s: string;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams,public altr:AlertController,public storage: Storage, public alertCtrl: AlertController) {
    //sessione: chi sei?  
    storage.get('email').then((val) => {
      this.user=val;  
      console.log("email1: "+ this.user);
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
    storage.get('nome_s').then((val) => {
      this.nome_s=val;
    });
  
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
          if(data['_body'][0]=="["){
          this.dati_server=JSON.parse(data['_body']);
          if(this.dati_server!=null){
            this.articoli=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,nome_mag));
            }
          }
        }else{
          console.log(data['_body']);
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

  invia_richiesta(){
    var flag=true;
    var email=this.user;
    var password=this.pass;
    var richiedi=[];
    var squadra=this.nome_s;
    for(var i=0;i<this.articoli.length;i++){
      if(this.quantita_articoli[i]>this.articoli[i].quantita){
        flag=false;
      }
      if(this.quantita_articoli[i]==undefined || this.quantita_articoli[i]==0){
      }else{
        richiedi.push(new Richiesta(this.articoli[i].id,this.quantita_articoli[i]));
      }
    }
    if(flag){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers }); 

      let postParams = {
        email,
        password,
        squadra,
        richiedi
      };
      this.http.post("http://niscmanager.altervista.org/richiedi_articoli.php", JSON.stringify(postParams), options) 
      .subscribe(data => {
          let alert = this.alertCtrl.create({
            title: data['_body'],
            subTitle: '',
            buttons: [{
              text: 'Ok',
              handler: () => {
                let navTransition = alert.dismiss();
                navTransition.then(() => {
                    this.navCtrl.pop();
                  });
                return false;
              }
            }]
          });
          alert.present();
      });
    }else{
      let alert = this.alertCtrl.create({
        title: "Limite pezzi superato",
        subTitle: '',
        buttons: [{
          text: 'Ok',
          handler: () => {
            let navTransition = alert.dismiss();
            navTransition.then(() => {
            });
            return false;
          }
        }]
      });
      alert.present();
    }
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
    this.id=id;
    this.nome=nome;
    this.quantita=quantita;
    this.descrizione=descrizione;
    this.nome_magazzino=nome_magazzino;
  }
  
}

class Richiesta{
  id: string;
  quantita: string;

  constructor(id:string,quantita:string){
    this.id=id;
    this.quantita=quantita;
  }
}
