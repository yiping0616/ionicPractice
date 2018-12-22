import { Component } from '@angular/core';

import { Platform, ActionSheetController, AlertController } from 'ionic-angular';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) { }
  // Compoent : Action Sheet
  openMenu() {
    const actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Paly',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }
  // Component: Prompt Alert
  showPromptAlert() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter a name for this new album you areso keen on adding',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(`Save clicked title: ${data.title}`);
          }
        }
      ]
    });
    prompt.present();
  }
  // Component: Radio Alert
  showRadioAlert() {
    const radio = this.alertCtrl.create();
    radio.setTitle('Lightsaber color');
    radio.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    radio.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });
    radio.addButton('Cancel');
    radio.addButton({
      text: 'OK',
      handler: data => {
        console.log(`You choose ${data}`);
      }
    });
    radio.present();
  }
}
