import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

declare var window : any;
@Injectable()
export class DbProvider {
    db : SQLiteObject = null;
    
    constructor(public sqlite: SQLite) {
        console.log('Bienvenido al factory de almacenamiento');
        console.log(window);
    }
  
    public openDb(){
        return this.sqlite.create({
            name: 'data_app.db',
            location: 'default' // el campo location es obligatorio
        })
        .then((db: SQLiteObject) => {
            this.db = db;
        }).catch(e => {
            console.log(e);
            console.log("no existe la base de datos");
        });
    }

    public getDb() {
        return this.db;
    }    

    public deleteDb() {
        this.sqlite.deleteDatabase({
            name: 'data_app.db',
            location: 'default' // el campo location es obligatorio
        });
    }
}