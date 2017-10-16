import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { CategoriesFactory } from '../../factories/categoriesFactory';
import { SubcategoriesFactory } from '../../factories/subcategoriesFactory';
import { SubcategoryObject } from '../../interfaces/SubcategoryInterface';
import { CategoryObject } from '../../interfaces/CategoryInterface';
import { SubcategoryAdd } from './add/subcategoryAdd';

@Component({
  selector: 'subcategories',
  
  templateUrl: 'subcategories.html'
})
export class Subcategories {
    typeTransaction: string = 'ingresos';
    public categoriesItems: Array<CategoryObject> = new Array<CategoryObject>();

  constructor(public navCtrl: NavController, public modalController: ModalController, public categoryFactory: CategoriesFactory, public subcategoryFactory: SubcategoriesFactory, public toastCtrl: ToastController) {
      this.getCategories();
  }

  createSubcategory() {
    const subcategoriaModal = this.modalController.create(SubcategoryAdd, {'typeTransaction': this.typeTransaction});
    subcategoriaModal.present();
    subcategoriaModal.onDidDismiss(data => {
      console.log(data);
      this.subcategoryFactory.addSubcategory(this.typeTransaction, data.category, data.nombre);
      this.getCategories();
    });
  }

  getCategories() {
      this.categoriesItems = this.categoryFactory.getCategories(this.typeTransaction);
  }

  getColorByTransaction() {
    this.getCategories();
    return this.typeTransaction
  }

}