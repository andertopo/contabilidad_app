import { Injectable } from '@angular/core';
import { CategoryObject } from '../../interfaces/CategoryInterface';
import { DbProvider } from './SqLiteFactory'
import { CategoryDAO } from './CategoriesDAOFactory';
import { SubcategoryObject } from '../../interfaces/SubcategoryInterface';
@Injectable()
export class SubcategoryDAO {
    
    constructor(public dbProv:DbProvider, public categoryDAO: CategoryDAO) {
        console.log('Bienvenido al factory de almacenamiento');
    }
  
    public createTableSubcategories() {
        return this.dbProv.getDb().executeSql("CREATE TABLE IF NOT EXISTS subcategories ( subcategory_id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER, subcategory_name TEXT, FOREIGN KEY(category_id) REFERENCES categories(category_id) )",{})
    }

    public addCategory(categoryObject: CategoryObject) {
        let sql = "INSERT INTO subcategories (subcategory_name, category_id) values (?,?)";
        return this.dbProv.getDb().executeSql(sql,[categoryObject.category_name, categoryObject.category_icon]);
    }

    public getSubcategories(typeTransaction: string) {
        let categories = new Array<CategoryObject>();
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
               this.getSubcategoriesByCategory(category.category_id).then((subcategoriesRes) => {
                for(var i = 0; i < subcategoriesRes.rows.length; i++) {
                    console.log(subcategoriesRes.rows.item(i));
                    let subcategory_bd = subcategoriesRes.rows.item(i);
                    let subcategory:SubcategoryObject = {
                        subcategory_name: subcategory_bd.subcategory_name
                    }
                    category.subcategories.push(subcategory);
                }
                categories.push(category);
               }).catch((err) => {
                console.log("ha ocurrido un error trayendo las categorias");
                console.log(err);
               })
            }
        }).catch((err) => {
            console.log("ha ocurrido un error trayendo las categorias");
            console.log(err);
        });
        return categories;
    }

    public getSubcategoriesByCategory(category_id: number) {
        let sql = "SELECT * FROM subcategories WHERE category_id = ?";
        console.log("consiguiendo categorias " + category_id + " -- " + sql);
        return this.dbProv.getDb().executeSql(sql,[category_id]);
    }
    
}