
import { createStore,combineReducers } from "redux";
import filterReducer from "../reducers/reducerFilter";
import ratingReducer from "../reducers/Reducer";
import movieReducer from "../reducers/movieReducer";
const store = createStore(combineReducers({
    rating:ratingReducer,
    filterValue:filterReducer,
    movies:movieReducer
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
