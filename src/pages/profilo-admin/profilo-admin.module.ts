import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfiloAdminPage } from './profilo-admin';

@NgModule({
  declarations: [
    ProfiloAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfiloAdminPage),
  ],
})
export class ProfiloAdminPageModule {}
