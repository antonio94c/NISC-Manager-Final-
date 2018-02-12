import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeMagPage } from './home-mag';

@NgModule({
  declarations: [
    HomeMagPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeMagPage),
  ],
})
export class HomeMagPageModule {}
