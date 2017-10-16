import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CategoriesFactory } from '../../factories/categoriesFactory';
import { CategoryObject } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'Categories',
  templateUrl: 'categories.html'
})
export class Categories {
    typeTransaction: string = 'ingresos';
    public categoriesItems: Array<CategoryObject> = new Array<CategoryObject>();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public categoryFactory: CategoriesFactory, public toastCtrl: ToastController) {
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
              this.categoryFactory.addCategory(this.typeTransaction, data.nombre);
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
      console.log(this.typeTransaction);
      console.log(this.categoryFactory.getCategories(this.typeTransaction));
      this.categoriesItems = this.categoryFactory.getCategories(this.typeTransaction);
      console.log(this.categoriesItems);
  }

  getColorByTransaction() {
    this.getCategories();
    return this.typeTransaction;
  }

}