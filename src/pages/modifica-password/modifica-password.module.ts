import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificaPasswordPage } from './modifica-password';

@NgModule({
  declarations: [
    ModificaPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificaPasswordPage),
  ],
})
export class ModificaPasswordPageModule {}
