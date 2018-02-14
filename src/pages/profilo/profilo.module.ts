import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfiloUtentePage } from './profilo';

@NgModule({
  declarations: [
   ProfiloUtentePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfiloUtentePage),
  ],
})
export class ProfiloUtentePageModule {}



