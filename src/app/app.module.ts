import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Transactions } from '../pages/transactions/transactions';
import { Categories } from '../pages/categories/categories';
import { Subcategories } from '../pages/subcategories/subcategories';
import { SubcategoryAdd } from '../pages/subcategories/add/subcategoryAdd';
import { CategoriesFactory } from '../factories/categoriesFactory';
import { SubcategoriesFactory } from '../factories/subcategoriesFactory';
import { DbProvider } from '../factories/SqLiteFactory';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Transactions,
    Categories,
    Subcategories,
    SubcategoryAdd
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Transactions,
    Categories,
    Subcategories,
    SubcategoryAdd
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriesFactory,
    SubcategoriesFactory,
    DbProvider,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
