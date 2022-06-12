import {ACTION_TYPES5} from "./actionTypes"


export const cresateHeroRequestAction = values =>{
   return{
     type:  ACTION_TYPES5.CREATE_HERO_REQUEST,
     values
   } 
}
export const cresateHeroSuccessAction = values =>{
  return{
    type:  ACTION_TYPES5.CREATE_HERO_SUCCESS,
    values
  } 
}
export const cresateHeroErrorAction = error =>{
  return{
    type:  ACTION_TYPES5.CREATE_HERO_ERROR,
    error
  } 
}