import { Injectable } from '@angular/core';
import { CategoriesFactory } from './categoriesFactory'
import { CategoryObject } from '../interfaces/CategoryInterface';
import { SubcategoryObject } from '../interfaces/SubcategoryInterface';

@Injectable()
export class SubcategoriesFactory {

 constructor(public categoryFactory:CategoriesFactory) {}

 addSubcategory(typeTransaction, category, subcategory_name) {
     let subcategoryObj:SubcategoryObject = {
         subcategory_name: subcategory_name
     }
     console.log("almacenando subcategoría " + typeTransaction + " -- " + category + " -- " + subcategory_name);

     console.log(subcategoryObj);
     let catogories = this.categoryFactory.getCategories(typeTransaction);
     console.log(catogories);
     //catogories[category].subcategories.push(subcategoryObj);
 }
 
 getSubcategories(typeTransaction, category) {
    return this.categoryFactory.getCategories(typeTransaction)[category].subcategories;
 }
}

