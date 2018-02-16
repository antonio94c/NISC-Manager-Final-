import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-elimina-articoli',
  templateUrl: 'elimina-articoli.html',
})
export class EliminaArticoliPage {

  articoli = [];
  dati_server: any;
  titolo: String;
  user: String;
  pass: String;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
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
    var nome_mag=this.navParams.data;
    this.titolo=nome_mag;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      email,
      password,
      nome_mag
    };
    this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options) 
    .subscribe(data => {
      if(data['_body'][0]=="["){
          this.dati_server = JSON.parse(data['_body']); 
          if(this.dati_server!=null){
            this.articoli=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,nome_mag));
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

  elimina(articolo: Articolo){
    var email=this.user;
    var password=this.pass;
    var id=articolo.id;
    var magazzino=articolo.nome_magazzino;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers }); 

    let postParams = {
      email,
      password,
      id,
      magazzino
    };
    this.http.post("http://niscmanager.altervista.org/elimina_articolo.php", JSON.stringify(postParams), options) 
    .subscribe(data => { 
          console.log(data['_body']);
          if(data['_body']=="Operazione eseguita"){
            let alert = this.alertCtrl.create({
              title: 'Articolo eliminato',
              subTitle: '',
              buttons: ['OK']
            });
            alert.present();
            this.ionViewWillEnter();
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
  