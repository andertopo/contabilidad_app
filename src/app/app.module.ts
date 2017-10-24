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
import { Options } from '../pages/options/options';
import { Dreams } from '../pages/dreams/dreams';
import { DreamAdd } from '../pages/dreams/add/dreamAdd'

import { ProgressBarComponent } from '../pages/globals/progress-bar/ProgressBarComponent';

import { CategoriesFactory } from '../factories/categoriesFactory';
import { SubcategoriesFactory } from '../factories/subcategoriesFactory';
import { DbProvider } from '../factories/SQLite/SqLiteFactory';
import { SchemeFactory } from '../factories/SQLite/CreateSchemeFactory';
import { CategoryDAO } from '../factories/SQLite/CategoriesDAOFactory';
import { SubcategoryDAO } from '../factories/SQLite/SubcategoriesDAOFactory';
import { DreamsFactory } from '../factories/DreamFactory';

import { SQLite } from '@ionic-native/sqlite';
import { AppPreferences } from '@ionic-native/app-preferences';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Transactions,
    Categories,
    Subcategories,
    SubcategoryAdd,
    Options,
    Dreams,
    DreamAdd,
    ProgressBarComponent
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
    SubcategoryAdd,
    Options,
    Dreams,
    DreamAdd,
    ProgressBarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriesFactory,
    SubcategoriesFactory,
    DreamsFactory,
    DbProvider,
    SchemeFactory,
    SQLite,
    AppPreferences,
    CategoryDAO,
    SubcategoryDAO,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
