import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { GestioneRegistrazionePage } from '../gestione-registrazione/gestione-registrazione';
import {GestioneMagazziniAdminPage} from '../gestione-magazzini-admin/gestione-magazzini-admin';
import {GestioneUtentiPage} from '../gestione-utenti/gestione-utenti';
import { ProfiloPage } from '../profilo/profilo';
import { ModificaPasswordPage } from '../modifica-password/modifica-password';

@IonicPage()
@Component({
  selector: 'page-home-amm',
  templateUrl: 'home-amm.html',
})
export class HomeAmmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  viewMagazzini(){
    this.navCtrl.push(GestioneMagazziniAdminPage);
  }

  goToGestioneRegistrazioni(){
    this.navCtrl.push(GestioneRegistrazionePage);
  }

  goToGestioneUtenti(){
    this.navCtrl.push(GestioneUtentiPage);
  }

  goToProfilo(){
    this.navCtrl.push(ProfiloPage);
  }

}

class Utente{
  
   email: string;
   password: string;
   nome_s: string;
   componenti: number;
   stato: string;
   ruolo: string;
  
    constructor(email:string, password:string, nome_s:string, compo:number, stato:string, ruolo:string){
      this.email = email;
      this.password = password;
      this.nome_s = nome_s;
      this.componenti = compo;
      this.stato = stato;
      this.ruolo = ruolo;
    }
  }