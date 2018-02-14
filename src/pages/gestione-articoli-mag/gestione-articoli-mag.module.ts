import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneArticoliMagPage } from './gestione-articoli-mag';

@NgModule({
  declarations: [
    GestioneArticoliMagPage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneArticoliMagPage),
  ],
})
export class GestioneArticoliMagPageModule {}
