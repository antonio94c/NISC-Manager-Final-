import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DettagliPage } from './dettagliarticoli';

@NgModule({
  declarations: [
    DettagliPage,
  ],
  imports: [
    IonicPageModule.forChild(DettagliPage),
  ],
})
export class DettagliPageModule {}
