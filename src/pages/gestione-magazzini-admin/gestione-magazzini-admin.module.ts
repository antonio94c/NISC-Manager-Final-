import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneMagazziniAdminPage } from './gestione-magazzini-admin';

@NgModule({
  declarations: [
    GestioneMagazziniAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneMagazziniAdminPage),
  ],
})
export class GestioneMagazziniAdminPageModule {}
