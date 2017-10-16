import { Injectable } from '@angular/core';
import {CategoryObject} from '../interfaces/CategoryInterface';
import {SubcategoryObject} from '../interfaces/SubcategoryInterface';

@Injectable()
export class CategoriesFactory {

 public categoriesIngresos: Array<CategoryObject> = new Array<CategoryObject>();
 public categoriesGastos: Array<CategoryObject> = new Array<CategoryObject>();

 constructor() {
    let categoryObj:CategoryObject = {
        category_name: 'salario',
        category_icon: '',
        subcategories: new Array<SubcategoryObject>()
    };
    this.categoriesIngresos.push(categoryObj);
    let categoryObj2:CategoryObject = {
        category_name: 'bonos',
        category_icon: '',
        subcategories: new Array<SubcategoryObject>()
    };
    this.categoriesIngresos.push(categoryObj2);

    let categoryObj3:CategoryObject = {
        category_name: 'alimentación',
        category_icon: '',
        subcategories: new Array<SubcategoryObject>()
    };

    let SubcategoryObject1:SubcategoryObject = {
        subcategory_name: "desayuno"
    };
    let SubcategoryObject2:SubcategoryObject = {
        subcategory_name: "almuerzo"
    };
    let SubcategoryObject3:SubcategoryObject = {
        subcategory_name: "cena"
    };
    categoryObj3.subcategories.push(SubcategoryObject1);
    categoryObj3.subcategories.push(SubcategoryObject2);
    categoryObj3.subcategories.push(SubcategoryObject3);

    this.categoriesGastos.push(categoryObj3);
    let categoryObj4:CategoryObject = {
        category_name: 'salud',
        category_icon: '',
        subcategories: new Array<SubcategoryObject>()
    };
    this.categoriesGastos.push(categoryObj4);
 }

 addCategory(typeTransaction: string, category: string) {
     let categoryObj:CategoryObject = {
         category_name: category,
         category_icon: '',
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
    if(typeTransaction == 'ingresos') {
        return this.categoriesIngresos;
    } else if(typeTransaction == 'gastos') {
        return this.categoriesGastos;
    }
 }
}

