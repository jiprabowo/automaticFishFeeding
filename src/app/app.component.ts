import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
const config = {
  apiKey: "AIzaSyBacp2UuvhAu7PxM4I1n46hVnvc2w2BePY",
  authDomain: "flazh-de669.firebaseapp.com",
  databaseURL: "https://flazh-de669.firebaseio.com",
  projectId: "flazh-de669",
  storageBucket: "flazh-de669.appspot.com",
  messagingSenderId: "149664711916"
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Manual',
      url: '/manual',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
