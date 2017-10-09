import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CategoryObject, CategoriesFactory } from '../../factories/categoriesFactory';

@Component({
  selector: 'Categories',
  templateUrl: 'categories.html'
})
export class Categories {
    typeTransaction: string = 'ingresos';
    public categoriesItems: Array<CategoryObject> = new Array<CategoryObject>();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public categoryFactory: CategoriesFactory) {
      this.getCategories();
  }

  goHome() {
      this.navCtrl.setRoot(HomePage);
  }

  createCategory() {
    const alert = this.alertCtrl.create({
        title: 'Nueva Categoría',
        inputs: [
          {
            name: 'Nombre',
            placeholder: 'Nombre'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Crear',
            handler: data => {
              console.log("categoría creada");
              this.categoryFactory.addCategory('ingresos', 'alimentación');
              this.getCategories();
            }
          }
        ]
      });
      alert.present();
  }

  getCategories() {
      console.log(this.typeTransaction);
      console.log(this.categoryFactory.getCategories(this.typeTransaction));
      this.categoriesItems = this.categoryFactory.getCategories(this.typeTransaction);
      console.log(this.categoriesItems);
  }

  getColorByTransaction() {
      if(this.typeTransaction === 'ingresos') {
          this.getCategories();
          return 'secondary';
      } else {
          this.getCategories();
          return 'danger'
      }
  }

}