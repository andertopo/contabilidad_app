import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { CategoryObject } from '../interfaces/CategoryInterface';

@Injectable()
export class DbProvider {
    db : SQLiteObject = null;
    
    constructor(public sqlite: SQLite) {
        console.log('Bienvenido al factory de almacenamiento');
    }
  
    public openDb(){
        return this.sqlite.create({
            name: 'data_app.db',
            location: 'default' // el campo location es obligatorio
        })
        .then((db: SQLiteObject) => {
            this.db =db;
        })
    }

    public createTableCategories() {
        return this.db.executeSql("create table if not exists categories( id INTEGER PRIMARY KEY AUTOINCREMENT, category_name TEXT, category_icon TEXT )",{})
    }

    public addSitio(categoryObject: CategoryObject) {
        let sql = "INSERT INTO categories (category_name, category_icon) values (?,?,?,?,?)";
        return this.db.executeSql(sql,[categoryObject.category_name, categoryObject.category_icon]);
    }
    
}