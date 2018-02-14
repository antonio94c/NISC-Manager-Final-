import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RichiesteMaterialePage } from './richiestemateriale';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@NgModule({
  declarations: [
    RichiesteMaterialePage,
  ],
  imports: [
    IonicPageModule.forChild(RichiesteMaterialePage),
  ],
})
export class RichiesteMaterialePageModule {}