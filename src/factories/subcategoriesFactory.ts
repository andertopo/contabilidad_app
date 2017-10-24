import { Injectable } from '@angular/core';
import { SubcategoryDAO } from './SQLite/SubcategoriesDAOFactory';
import { SubcategoryObject } from '../interfaces/SubcategoryInterface';

@Injectable()
export class SubcategoriesFactory {

 constructor(public subcategoryDAO:SubcategoryDAO) {}

 addSubcategory(typeTransaction: string, categoryIndex: number, subcategory_name: string) {
     let subcategoryObj:SubcategoryObject = {
         subcategory_name: subcategory_name
     }
     console.log("almacenando subcategoría " + typeTransaction + " -- " + categoryIndex + " -- " + subcategory_name);

     console.log(subcategoryObj);
     //let categories = this.categoryFactory.getCategories(typeTransaction);
     //console.log(categories);
     //categories[categoryIndex].subcategories.push(subcategoryObj);
 }
 
 getSubcategories(typeTransaction: string) {
    return this.subcategoryDAO.getSubcategories(typeTransaction);
 }
}

