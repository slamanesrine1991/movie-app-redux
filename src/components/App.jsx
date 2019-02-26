import React from 'react';
import MovieCard from '../components/MovieCard.jsx'
import Form from './Form.jsx'
import RatingToStars from './Star.jsx'
import {connect} from "react-redux";
import { searchRating } from '../action/action.js';
import { searchFiltring } from '../action/action.js';


function mapDispatchToProps(dispatch) {
  return {
    searchFiltring: newFilter => dispatch(searchFiltring(newFilter)),
    searchRating: newRating => dispatch(searchRating(newRating))

  };
}

function mapStateToProps(state){
  return{filterValue:state.filterValue,rating:state.rating,movies:state.movies

  }
}


const App = ({searchRating,rating,filterValue,searchFiltring,movies}) => {


    return (
      <div className="app">
        <input onChange={(e)=>searchFiltring(e.target.value) }type="text" />
    <RatingToStars  
      rating={rating}
      triggerRating={searchRating} />
        <div className="movies">
        {
          movies.filter(movie => {
            return movie.rating>=rating && movie.title.includes(filterValue)
          })
          .map(movie => (
            <MovieCard 
              title={movie.title}
              image={movie.image}
              rating={movie.rating}
              releaseDate={movie.releaseDate}
            />
          ))
        }
        </div>
        
      <Form />
      </div>
    );
  }

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;