import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneArticoliAdminPage } from './gestione-articoli-admin';

@NgModule({
  declarations: [
    GestioneArticoliAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneArticoliAdminPage),
  ],
})
export class GestioneArticoliAdminPageModule {}
