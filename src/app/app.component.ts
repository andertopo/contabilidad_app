import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SchemeFactory } from '../factories/SQLite/CreateSchemeFactory';
import { AppPreferences } from '@ionic-native/app-preferences';

import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public appPreferences: AppPreferences, public schemeFactory: SchemeFactory) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.appPreferences.remove('', 'exists_bd').then((res) => {console.log("borrando"); console.log(res)});
      this.appPreferences.fetch('exists_bd').then((res) => { 
        if(res) {
          console.log("si está la bd en el dispositivo");
          this.schemeFactory.verificateTables();
        } else {
          console.log("pailander, no está en las preferencias, toca crear la BD");
          schemeFactory.populateBd();
          this.appPreferences.store('', 'exists_bd', 'true');
          this.schemeFactory.verificateTables();
        }
      }).catch((err) => {
        console.log("pailander, no está en las preferencias, toca crear la BD");
      });
    });
  }
}

