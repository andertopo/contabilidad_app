import { Component } from '@angular/core';

import { Transactions } from '../transactions/transactions';
import { Categories } from '../categories/categories';
import { Subcategories } from '../subcategories/subcategories';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Transactions;
  tab3Root = Categories;
  tab4Root = Subcategories;

  constructor() {

  }
}
