import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Categories } from '../categories/categories';
import { Subcategories } from '../subcategories/subcategories';
import { Dreams } from '../dreams/dreams';

@Component({
  selector: 'options',
  templateUrl: 'options.html'
})
export class Options {
    menuOption: string = 'configuraciones';

  constructor(public navCtrl: NavController) {}

  getColorByTransaction() {
      return this.menuOption;
  }

  goTo(route) {
    if(route === 'categorias') {
      this.navCtrl.push(Categories);
    } else if(route === 'subcategorias') {
      this.navCtrl.push(Subcategories);
    } else if(route === 'sueños') {
      this.navCtrl.push(Dreams);
    }
  }

}