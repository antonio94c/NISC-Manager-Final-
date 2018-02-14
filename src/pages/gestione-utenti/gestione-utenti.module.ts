import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneUtentiPage } from './gestione-utenti';

@NgModule({
  declarations: [
    GestioneUtentiPage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneUtentiPage),
  ],
})
export class GestioneUtentiPageModule {}
