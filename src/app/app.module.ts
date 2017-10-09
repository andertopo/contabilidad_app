import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Transactions } from '../pages/transactions/transactions';
import { Categories } from '../pages/categories/categories';
import { CategoriesFactory } from '../factories/categoriesFactory';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Transactions,
    Categories
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Transactions,
    Categories
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriesFactory,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
