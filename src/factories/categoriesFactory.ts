import { Injectable } from '@angular/core';
import { CategoryObject } from '../interfaces/CategoryInterface';
import { SubcategoryObject } from '../interfaces/SubcategoryInterface';
import { CategoryDAO } from './SQLite/CategoriesDAOFactory';

@Injectable()
export class CategoriesFactory {

 public categoriesIngresos: Array<CategoryObject> = new Array<CategoryObject>();
 public categoriesGastos: Array<CategoryObject> = new Array<CategoryObject>();

 constructor(public categoryDAO: CategoryDAO) {}

 addCategory(typeTransaction: string, category: string) {
     let categoryObj:CategoryObject = {
         category_id:0,
         category_name: category,
         category_icon: '',
         category_type: typeTransaction,
         subcategories: new Array<SubcategoryObject>()
     }
     console.log("almacenando categoría ");
     console.log(categoryObj);
     if(typeTransaction == 'ingresos') {
         this.categoriesIngresos.push(categoryObj);
         console.log("luego de almacenar");
         console.log(this.categoriesIngresos);
     } else if(typeTransaction == 'gastos') {
         this.categoriesGastos.push(categoryObj);
         console.log("luego de almacenar");
         console.log(this.categoriesGastos);
     }

 }
 
 getCategories(typeTransaction: string) {
    this.categoriesIngresos = new Array<CategoryObject>();
     this.categoryDAO.getCategoriesByType(typeTransaction).then((res) => {
         for(var i = 0; i < res.rows.length; i++) {
             console.log(res.rows.item(i));
             let category_bd = res.rows.item(i);
             let category:CategoryObject = {
                 category_id: category_bd.category_id,
                 category_name: category_bd.category_name,
                 category_icon: category_bd.category_icon,
                 category_type: category_bd.category_type,
                 subcategories: new Array<SubcategoryObject>()
            };
            this.categoriesIngresos.push(category);
         }
     }).catch((err) => {
         console.log("ha ocurrido un error trayendo las categorias");
         console.log(err);
     });
     return this.categoriesIngresos;
 }
}

