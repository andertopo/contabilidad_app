import { Injectable } from '@angular/core';
import { CategoryObject } from '../../interfaces/CategoryInterface';
import { DbProvider } from './SqLiteFactory'

@Injectable()
export class CategoryDAO {
    
    constructor(public dbProv:DbProvider) {
        console.log('Bienvenido al factory de almacenamiento Categorias');
    }

    public addCategory(categoryObject: CategoryObject) {
        let sql = "INSERT INTO categories (category_name, category_icon) values (?,?)";
        return this.dbProv.getDb().executeSql(sql,[categoryObject.category_name, categoryObject.category_icon]);
    }

    public getAllCategories() {
        let sql = "SELECT * FROM categories";
        return this.dbProv.getDb().executeSql(sql,{});
    }

    public getCategoriesByType(typeTransaction: string) {
        let sql = "SELECT * FROM categories WHERE category_type = ?";
        console.log("consiguiendo categorias " + typeTransaction + " -- " + sql);
        return this.dbProv.getDb().executeSql(sql,[typeTransaction]);
    }

    public getCategoryById(category_id:number) {
        let sql = "SELECT * FROM categories WHERE category_id = ?";
        console.log("consiguiendo categorias " + category_id + " -- " + sql);
        return this.dbProv.getDb().executeSql(sql,[category_id]);
    }
    
}