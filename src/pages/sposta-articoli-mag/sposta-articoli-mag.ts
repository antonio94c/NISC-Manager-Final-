import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sposta-articoli-mag',
  templateUrl: 'sposta-articoli-mag.html',
})
export class SpostaArticoliMagPage {
  articoli = [];
  dati_server: any;
  titolo: String;
  magazzini=[];
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
          this.dati_server = JSON.parse(data['_body']); 
          console.log(this.dati_server);
          if(this.dati_server!=null){
            this.articoli=[];
            for(var i=0;i<this.dati_server.length;i++){
              this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione,nome_mag));
            }
          }
        });

    postParams = {
      email,
      password,
      nome_mag
    };
    this.http.post("http://niscmanager.altervista.org/get_lista_magazzini.php", JSON.stringify(postParams), options) 
    .subscribe(data => {
          this.magazzini = JSON.parse(data['_body']); 
          console.log(this.magazzini);
        });
  }

  sposta(articolo: Articolo, spostare: number){
    var email=this.user;
    var password=this.pass;
    let alert = this.alertCtrl.create();
    alert.setTitle('Sposta da '+this.navParams.data+' a...');

    alert.addInput({
      type: 'radio',
      label: this.magazzini[0],
      value: this.magazzini[0],
      checked: true
    });
    for(var i=1; i<this.magazzini.length;i++){
      alert.addInput({
        type: 'radio',
        label: this.magazzini[i],
        value: this.magazzini[i],
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log("sposto "+spostare+" in "+data);
        var id=articolo.id;
        var nome=articolo.nome;
        var descrizione=articolo.descrizione;
        var mag_part=articolo.nome_magazzino;
        var mag_dest=data;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers }); 
        let postParams = {
          email,
          password,
          id,
          nome,
          descrizione,
          mag_part,
          spostare,
          mag_dest
        };
        this.http.post("http://niscmanager.altervista.org/sposta_articoli.php", JSON.stringify(postParams), options) 
        .subscribe(data => {
          console.log(data['_body']);
          if(data['_body']=="Operazione eseguita"){
            let alert = this.alertCtrl.create({
              title: 'Operazione completata',
              subTitle: '',
              buttons: [{
                text: 'Ok',
                handler: () => {
                  let navTransition = alert.dismiss();
                  navTransition.then(() => {
                      this.ionViewWillEnter();
                    });
                  return false;
                }
              }]
            });
            alert.present();
          }else{
            let alert = this.alertCtrl.create({
              title: data['_body'],
              subTitle: '',
              buttons: ['Chiudi']
            });
            alert.present();
          }
        });
      }
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

  constructor(id: number, nome: string, quantita: number, descrizione: string, nome_magazzino: string){
    this.id=id;
    this.nome=nome;
    this.quantita=quantita;
    this.descrizione=descrizione;
    this.nome_magazzino=nome_magazzino;
  }
}
  