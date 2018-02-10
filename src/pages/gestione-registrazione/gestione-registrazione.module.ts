import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneRegistrazionePage } from './gestione-registrazione';

@NgModule({
  declarations: [
    GestioneRegistrazionePage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneRegistrazionePage),
  ],
})
export class GestioneRegistrazionePageModule {}
