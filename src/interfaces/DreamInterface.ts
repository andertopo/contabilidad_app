import { CategoryObject } from './CategoryInterface';
export interface DreamObject {
    dream_id:number,
    dream_description:string,
    dream_image:string,
    dream_category: CategoryObject,
    dream_value:number,
    dream_initial_value:number,
    dream_monthly_apport:number,
    dream_current_value:number,
    dream_advance:number
    //todo: la cuenta
}