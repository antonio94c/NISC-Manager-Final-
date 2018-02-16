import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-elimina-magazzini-admin',
  templateUrl: 'elimina-magazzini-admin.html',
})
export class EliminaMagazziniAdminPage {

  magazzini = [];
  dati_server: any;
  user: String;
  pass: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, public storage: Storage) {
    this.magazzini=navParams.data;
    this.dati_server=navParams.data;
    storage.get('email').then((val) => {
      this.user=val;
    });
    storage.get('password').then((val) => {
      this.pass=val;
    });
  }

  elimina(nome: String) {
    
    let confirm = this.alertCtrl.create({
      title: 'Sicuro di voler eliminare il magazzino "'+nome+'"?',
      message: '',
      buttons: [
        {
          text: 'NO',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'SI',
          handler: () => {
            console.log('Agree clicked');
            var email=this.user;
            var password=this.pass;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded' );
            let options = new RequestOptions({ headers: headers }); 
            let postParams = {
              email,
              password,
              nome
            };
            this.http.post("http://niscmanager.altervista.org/elimina_magazzino.php", JSON.stringify(postParams), options)
                .subscribe(data => {
                  console.log(data['_body']);
                  if(data['_body']=="Operazione eseguita"){
                    let alert = this.alertCtrl.create({
                      title: 'Magazzino eliminato',
                      subTitle: '',
                      buttons: ['OK']
                    });
                    alert.present();
                    this.navCtrl.pop();
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
          }
      ]
    });
    confirm.present();
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
