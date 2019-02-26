import { ADD_MOVIE } from "../constants/action-types";
import { SET_RATING } from "../constants/action-types";
import { SET_FILTER } from "../constants/action-types";
export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}
export function searchRating(payload){
return{type :SET_RATING,rating:payload }

}
export function searchFiltring(payload){
  return{type :SET_FILTER,filterValue:payload }
  
  }