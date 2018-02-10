import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAmmPage } from './home-amm';

@NgModule({
  declarations: [
    HomeAmmPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAmmPage),
  ],
})
export class HomeAmmPageModule {}
