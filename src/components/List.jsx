// src/js/components/List.jsx
import React from "react";
import MovieCard from '../components/MovieCard.jsx'
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { movies: state.movies };
};
const ConnectedList = ({ movies }) => (
  <div className="list-group list-group-flush">
    {movies.
     map(movie => (
        <MovieCard 
          title={movie.title}
          image={movie.image}
          releaseDate={movie.releaseDate}
        />
        ))
        }
    
    
    
   
  </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;