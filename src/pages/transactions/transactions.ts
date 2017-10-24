import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Categories } from '../categories/categories';
import { Subcategories } from '../subcategories/subcategories';

@Component({
  selector: 'Transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {
    typeTransaction: string = 'ingresos';

  constructor(public navCtrl: NavController) {}

  goHome() {
      this.navCtrl.setRoot(HomePage);
  }

  goCategory() {
    this.navCtrl.setRoot(Categories);
  }
  goSubcategory() {
    this.navCtrl.setRoot(Subcategories);
  }

  getColorByTransaction() {
      return this.typeTransaction;
  }

}