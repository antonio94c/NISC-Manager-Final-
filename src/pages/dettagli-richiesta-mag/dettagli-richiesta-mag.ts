import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dettagli-richiesta-mag',
  templateUrl: 'dettagli-richiesta-mag.html',
})
export class DettagliRichiestaMagPage {

  richieste = [];
  dati_server: any;
  titolo: String;
  user: String;
  pass: String;
  approvare=[];

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
    storage.get('email').then((val) => {
      this.user=val;
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
    this.titolo="Richiesta "+navParams.data[0]+" - "+navParams.data[1];
  }

  ionViewWillEnter(){
    var email=this.user;
    var password=this.pass;
    var id=this.navParams.data[0];
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      email,
      password,
      id
    };
    this.http.post("http://niscmanager.altervista.org/get_dettagli_richiesta_mag.php", JSON.stringify(postParams), options) 
    .subscribe(data => {
      if(data['_body'][0]=="["){
          this.dati_server = JSON.parse(data['_body']); 
          console.log(this.dati_server);

          if(this.dati_server!=null){
            this.richieste=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.richieste.push(new Richiesta(id,this.dati_server[i].id_articolo,this.dati_server[i].articolo,this.dati_server[i].quantita_ric,this.dati_server[i].quantita_app,this.dati_server[i].squadra,this.dati_server[i].quantita_max));
            }
          }
      }else{
        console.log(data['_body']);
      }
        });
  }

  salva(){
    var flag=true;
    var email=this.user;
    var password=this.pass;
    var id=this.navParams.data[0];
    var approva=[];
    for(var i=0;i<this.approvare.length;i++){
      if(this.approvare[i]>(this.richieste[i].quantita_ric-this.richieste[i].quantita_app)){
        flag=false;
      }
      approva.push(new Approvazione(this.richieste[i].id_articolo,this.approvare[i]));
    }
    if(flag){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({ headers: headers }); 

      let postParams = {
        email,
        password,
        id,
        approva
      };
      this.http.post("http://niscmanager.altervista.org/approva_richiesta_mag.php", JSON.stringify(postParams), options) 
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

  rifiuta(){
    var email=this.user;
    var password=this.pass;
    var id=this.navParams.data[0];

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      email,
      password,
      id
    };
    this.http.post("http://niscmanager.altervista.org/rifiuta_richiesta_mag.php", JSON.stringify(postParams), options) 
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
  }

  initializeItems(){
    this.richieste = [];
    for(var i=0;i<this.dati_server.length;i++){
      this.richieste.push(this.dati_server[i]);
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
        return (richiesta.articolo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

class Richiesta{
  id: string;
  id_articolo: string;
  articolo: string;
  quantita_ric: string;
  quantita_app: string;
  squadra: string;
  quantita_max: string;

  constructor(id:string,id_articolo:string,articolo:string,quantita_ric:string,quantita_app:string,squadra:string,quantita_max:string){
    this.id=id;
    this.id_articolo=id_articolo;
    this.articolo=articolo;
    this.quantita_ric=quantita_ric;
    this.quantita_app=quantita_app;
    this.squadra=squadra;
    this.quantita_max=quantita_max;
  }
}
 

class Approvazione{
  id: string;
  quantita: string;

  constructor(id:string,quantita:string){
    this.id=id;
    this.quantita=quantita;
  }
}