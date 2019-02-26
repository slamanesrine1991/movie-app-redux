import { ADD_MOVIE } from "../constants/action-types";
const movies = 
 


   [
        {
          title:"test",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
            releaseDate:2015,
            rating:3,
        },
        {
          title:"star wars",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
            releaseDate:2015,
            rating:3,
        }
      ]
  
  function movieReducer(state = movies, action) {
    if (action.type === ADD_MOVIE) {
      return state.concat(action.payload)

      
    }
    return state;
  }
  export default movieReducer;