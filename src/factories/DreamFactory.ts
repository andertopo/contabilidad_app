import { Injectable } from '@angular/core';
import { DreamObject } from '../interfaces/DreamInterface';
import { CategoryDAO } from './SQLite/CategoriesDAOFactory';
import { CategoryObject } from '../interfaces/CategoryInterface';
import { SubcategoryObject } from '../interfaces/SubcategoryInterface';

@Injectable()
export class DreamsFactory {

 public dreams: Array<DreamObject> = new Array<DreamObject>();
 
 constructor(public categoryDAO: CategoryDAO) {
     let category:CategoryObject;
     this.categoryDAO.getCategoryById(1).then((res) => {
        for(var i = 0; i < res.rows.length; i++) {
            console.log(res.rows.item(i));
            let category_bd = res.rows.item(i);
            category = {
                category_id: category_bd.category_id,
                category_name: category_bd.category_name,
                category_icon: category_bd.category_icon,
                category_type: category_bd.category_type,
                subcategories: new Array<SubcategoryObject>()
           };
        }
     }).catch((err) => {
        console.log("ha ocurrido un error trayendo la categoria de id 1");
        console.log(err);
     });
     let dream1: DreamObject = {
         dream_id: 1,
         dream_description: 'viaje a sao paulo',
         //dream_image: 'https://bazargrafico.com/wp-content/uploads/2017/09/Brasil-Sao-Paolo.jpg',
         dream_image: '',
         dream_value: 7000000,
         dream_initial_value: 0,
         dream_monthly_apport: 200000,
         dream_category: category,
         dream_current_value: 7000000,
         dream_advance: 0.0
        };
        dream1.dream_advance = (dream1.dream_current_value * Number(100)) / dream1.dream_value;
    
        let dream2: DreamObject = {
            dream_id: 1,
            dream_description: 'viaje a italia',
            //dream_image: 'https://periodicocorreo.com.mx/wp-content/uploads/2017/01/italia.jpg',
            dream_image: '',
            dream_value: 5000000,
            dream_initial_value: 500000,
            dream_monthly_apport: 300000,
            dream_category: category,
            dream_current_value: 2500000,
            dream_advance: 0.0
           };
           dream2.dream_advance = (dream2.dream_current_value * Number(100)) / dream2.dream_value;
           let dream3: DreamObject = {
            dream_id: 1,
            dream_description: 'viaje a la riviera maya',
            dream_image: 'https://rivieramaya.grandvelas.com.mx/resourcefiles/slider-in-content-area/riviera-maya-attractions.jpg',
            dream_value: 5000000,
            dream_initial_value: 500000,
            dream_monthly_apport: 300000,
            dream_category: category,
            dream_current_value: 1000000,
            dream_advance: 0.0
           };
           dream3.dream_advance = (dream3.dream_current_value * Number(100)) / dream3.dream_value;

     this.dreams.push(dream1);
     this.dreams.push(dream2);
     this.dreams.push(dream3);
 }

 addDream(typeTransaction: string, category: string) {
     /*let categoryObj:CategoryObject = {
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
     }*/

 }
 
 getDreams() {
    return this.dreams;
 }
}

