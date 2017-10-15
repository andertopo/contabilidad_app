import { SubcategoryObject } from './SubcategoryInterface';
export interface CategoryObject{
    category_name:string,
    category_icon:string,
    subcategories:Array<SubcategoryObject>
}