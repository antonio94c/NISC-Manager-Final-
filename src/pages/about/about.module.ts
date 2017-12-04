import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AboutPage} from '../about/about';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@NgModule({
    declarations:[
        AboutPage,

    ],
    imports: [IonicPageModule.forChild(AboutPage),],
})

export class AboutPageModule{}