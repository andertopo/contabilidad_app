import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesFactory {

 public categoriesIngresos: Array<CategoryObject> = new Array<CategoryObject>();
 public categoriesGastos: Array<CategoryObject> = new Array<CategoryObject>();

 constructor() {
    let categoryObj:CategoryObject = {
        category_name: 'salario'
    };
    this.categoriesIngresos.push(categoryObj);
    let categoryObj2:CategoryObject = {
        category_name: 'bonos'
    };
    this.categoriesIngresos.push(categoryObj2);

    let categoryObj3:CategoryObject = {
        category_name: 'alimentación'
    };
    this.categoriesGastos.push(categoryObj3);
    let categoryObj4:CategoryObject = {
        category_name: 'salud'
    };
    this.categoriesGastos.push(categoryObj4);
 }

 addCategory(typeTransaction, category) {
     let categoryObj:CategoryObject = {
         category_name: category
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
 
 getCategories(typeTransaction) {
    if(typeTransaction == 'ingresos') {
        return this.categoriesIngresos;
    } else if(typeTransaction == 'gastos') {
        return this.categoriesGastos;
    }
 }
}

export interface CategoryObject{
    category_name:string
}