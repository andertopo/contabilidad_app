import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CategoriesFactory } from '../../factories/categoriesFactory';
import { SubcategoriesFactory } from '../../factories/subcategoriesFactory';
import { SubcategoryObject } from '../../interfaces/SubcategoryInterface';
import { CategoryObject } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'subcategories',
  templateUrl: 'subcategories.html'
})
export class Subcategories {
    typeTransaction: string = 'ingresos';
    public categoriesItems: Array<CategoryObject> = new Array<CategoryObject>();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public categoryFactory: CategoriesFactory, public subcategoryFactory: SubcategoriesFactory, public toastCtrl: ToastController) {
      this.getCategories();
  }

  goHome() {
      this.navCtrl.setRoot(HomePage);
  }

  createCategory() {
    const alert = this.alertCtrl.create({
        title: 'Nueva subcategoría',
        inputs: [
          {
            name: 'nombre',
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
              this.subcategoryFactory.addSubcategory(this.typeTransaction, "alimentacion", data.nombre);
              this.getCategories();
              const toast = this.toastCtrl.create({
                message: 'Se ha agregado la categoría',
                duration: 3000,
                position: 'middle'
              });
            
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });
            
              toast.present();
            }
          }
        ]
      });
      alert.present();
  }

  getCategories() {
      this.categoriesItems = this.categoryFactory.getCategories(this.typeTransaction);
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