import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { CategoriesFactory } from '../../../factories/categoriesFactory';
import { CategoryObject } from '../../../interfaces/CategoryInterface';

@Component({
  selector: 'SubcategoryAdd',
  templateUrl: 'subcategory_add.html'
})
export class SubcategoryAdd {
    form: any = {};
    public categories: Array<CategoryObject> = new Array<CategoryObject>();
    public typeTransaction: string = "";

  constructor(public navParams: NavParams, public navCtrl: NavController, public viewCtrl: ViewController, public categoryFactory: CategoriesFactory) {
    this.typeTransaction = this.navParams.get('typeTransaction');
    this.categories = this.categoryFactory.getCategories(this.typeTransaction);
  }

  closeModal() {
      console.log("cerrando");
      console.log(this.form);
      this.viewCtrl.dismiss(this.form); //Send back the form object when closeModal is called
  }

}