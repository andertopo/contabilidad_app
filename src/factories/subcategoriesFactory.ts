import { Injectable } from '@angular/core';
import { CategoriesFactory } from './categoriesFactory'
import { CategoryObject } from '../interfaces/CategoryInterface';
import { SubcategoryObject } from '../interfaces/SubcategoryInterface';

@Injectable()
export class SubcategoriesFactory {

 constructor(public categoryFactory:CategoriesFactory) {}

 addSubcategory(typeTransaction: string, categoryIndex: number, subcategory_name: string) {
     let subcategoryObj:SubcategoryObject = {
         subcategory_name: subcategory_name
     }
     console.log("almacenando subcategoría " + typeTransaction + " -- " + categoryIndex + " -- " + subcategory_name);

     console.log(subcategoryObj);
     let categories = this.categoryFactory.getCategories(typeTransaction);
     console.log(categories);
     categories[categoryIndex].subcategories.push(subcategoryObj);
 }
 
 getSubcategories(typeTransaction: string, categoryIndex: number) {
    return this.categoryFactory.getCategories(typeTransaction)[categoryIndex].subcategories;
 }
}

