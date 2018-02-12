import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneMagazziniMagPage } from './gestione-magazzini-mag';

@NgModule({
  declarations: [
    GestioneMagazziniMagPage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneMagazziniMagPage),
  ],
})
export class GestioneMagazziniMagPageModule {}
