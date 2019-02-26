import React from 'react'

//import './movieCard.scss'


const MovieCard = (props) => {
    const { image, title, releaseDate,rating} = props
    return (
        <div className="movie-card">
           
            <div className="image-container">
                <img alt="movie" src={image} />
            </div>
            <div>
                <span>{title}</span>
                <span>{releaseDate}</span>
                <span>{rating}</span>
            </div>
        </div>
    )
}

export default MovieCard
