import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialCardPage } from './social-card';

@NgModule({
  declarations: [
    SocialCardPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialCardPage),
  ],
})
export class SocialCardPageModule {}
