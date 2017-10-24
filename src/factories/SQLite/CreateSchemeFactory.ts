import { Injectable } from '@angular/core';
import { DbProvider } from './SqLiteFactory'

@Injectable()
export class SchemeFactory {
    
    constructor(public dbProv:DbProvider) {
        console.log('Bienvenido al factory de creación de base de datos');
        this.dbProv.openDb();
    }

    public populateBd() {
        console.log("llenando la bd");
        this.dbProv.deleteDb();
        this.createTableCategories();
        this.createTableSubcategories();
        this.createTableBudget();
        this.createTableTransactions();
    }

    private createTableCategories() {
        this.dbProv.openDb();
        return this.dbProv.getDb().sqlBatch([
            "CREATE TABLE IF NOT EXISTS categories( category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name TEXT, category_icon TEXT, category_type TEXT )",
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['1', 'salario', 'cash', 'ingresos']],
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['2', 'bono', 'card', 'ingresos']],

            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['3', 'alimentación', 'restaurant', 'gastos']],
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['4', 'salud', 'heart', 'gastos']],
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['5', 'compras', 'bus', 'gastos']],
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['6', 'facturas', 'barcode', 'gastos']],
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['7', 'hogar', 'home', 'gastos']],
            ["INSERT INTO categories(category_id, category_name, category_icon, category_type) VALUES(?, ?, ?, ?)", ['8', 'viajes', 'plane', 'gastos']],
        ]).then((res) => {
            console.log("llenanda la tabla categorias");
            console.log(res);
        }).catch((err) => {
            console.log("ha ocurrido un error creando la tabla categorias");
            console.log(err);
        });
    }

    private createTableSubcategories() {
        this.dbProv.openDb();
        return this.dbProv.getDb().sqlBatch([
            "CREATE TABLE IF NOT EXISTS subcategories ( subcategory_id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER, subcategory_name TEXT, FOREIGN KEY(category_id) REFERENCES categories(category_id) )",
            ["INSERT INTO subcategories(subcategory_id, category_id, subcategory_name) VALUES(?, ?, ?)", ['1', '3', 'desayuno']],
            ["INSERT INTO subcategories(subcategory_id, category_id, subcategory_name) VALUES(?, ?, ?)", ['2', '3', 'almuerzo']],
            ["INSERT INTO subcategories(subcategory_id, category_id, subcategory_name) VALUES(?, ?, ?)", ['3', '3', 'cena']],
        ]).then((res) => {
            console.log("llenanda la tabla subcategorias");
            console.log(res);
        }).catch((err) => {
            console.log("ha ocurrido un error creando la tabla subcategorias");
            console.log(err);
        });
    }

    private createTableTransactions() {
        this.dbProv.openDb();
        return this.dbProv.getDb().executeSql("CREATE TABLE IF NOT EXISTS transactions ( transaction_id INTEGER PRIMARY KEY AUTOINCREMENT, category_id INTEGER, subcategory_id INTEGER, type TEXT, create_date DATETIME NOT NULL, description TEXT, value REAL, FOREIGN KEY(category_id) REFERENCES categories(category_id), FOREIGN KEY(subcategory_id) REFERENCES subcategories(subcategory_id) ) ", {}).then((res) => {
            console.log("llenanda la tabla transacciones");
            console.log(res);
        }).catch((err) => {
            console.log("ha ocurrido un error creando la tabla transacciones");
            console.log(err);
        });;
    }

    private createTableBudget() {
        this.dbProv.openDb();
        return this.dbProv.getDb().executeSql("CREATE TABLE IF NOT EXISTS budgets ( budget_id INTEGER PRIMARY KEY AUTOINCREMENT, value REAL, category_id INTEGER, limit_budget REAL, FOREIGN KEY(category_id) REFERENCES categories(category_id) )", {}).then((res) => {
            console.log("llenanda la tabla presupuestos");
            console.log(res);
        }).catch((err) => {
            console.log("ha ocurrido un error creando la tabla presupuestos");
            console.log(err);
        });
    }

    public verificateTables() {
        console.log("verificando tablas");
        this.verificateCategories();
        this.verificateSubcategories();
        this.verificateTransactions();
        this.verificateBudgets();
    }

    private verificateCategories() {
        let sql = "SELECT * FROM categories";
        console.log("verificando categorias " + sql);
        this.dbProv.getDb().executeSql(sql,{}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    private verificateSubcategories() {
        let sql = "SELECT * FROM subcategories";
        console.log("verificando subcategorias " + sql);
        this.dbProv.getDb().executeSql(sql,{}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    private verificateTransactions() {
        let sql = "SELECT * FROM transactions";
        console.log("verificando transactions " + sql);
        this.dbProv.getDb().executeSql(sql,{}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    private verificateBudgets() {
        let sql = "SELECT * FROM budgets";
        console.log("verificando budgets " + sql);
        this.dbProv.getDb().executeSql(sql,{}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
}