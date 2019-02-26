
import { SET_RATING } from "../constants/action-types";

function ratingReducer(state = 1, action) {
  if (action.type === SET_RATING) {
    return action.rating;
  }
  return state;
}
export default ratingReducer;

