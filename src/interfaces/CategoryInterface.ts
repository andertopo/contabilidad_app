import { SubcategoryObject } from './SubcategoryInterface';
export interface CategoryObject{
    category_id:number,
    category_name:string,
    category_icon:string,
    category_type:string,
    subcategories:Array<SubcategoryObject>
}