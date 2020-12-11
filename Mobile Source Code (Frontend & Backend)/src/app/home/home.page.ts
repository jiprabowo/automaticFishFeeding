import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  jadwals = [];
  ref = firebase.database().ref('jadwals/');
  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    this.ref.on('value', resp => {
      this.jadwals = [];
      this.jadwals = snapshotToArray(resp);
      console.log(this.jadwals);
    });
  }
  addJadwal() {
    this.router.navigate(['/add-jadwal']);
  }
  edit(key) {
    this.router.navigate(['/edit/' + key]);
  }
  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this Jadwal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('jadwals/' + key).remove();
          }
        }
      ]
    });
    await alert.present();
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.jam = childSnapshot.jam;
    returnArr.push(item);
  });
  return returnArr;
}
