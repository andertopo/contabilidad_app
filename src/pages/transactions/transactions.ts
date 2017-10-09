import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Categories } from '../categories/categories';

@Component({
  selector: 'Transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {
    typeTransaction: string = 'ingreso';

  constructor(public navCtrl: NavController) {}

  goHome() {
      this.navCtrl.setRoot(HomePage);
  }

  goCategory() {
    this.navCtrl.setRoot(Categories);
  }

  getColorByTransaction() {
      if(this.typeTransaction === 'ingreso') {
          return 'secondary';
      } else {
          return 'danger'
      }
  }

}