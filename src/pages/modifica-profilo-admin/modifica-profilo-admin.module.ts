import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificaProfiloAdminPage } from './modifica-profilo-admin';

@NgModule({
  declarations: [
    ModificaProfiloAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificaProfiloAdminPage),
  ],
})
export class ModificaProfiloAdminPageModule {}
