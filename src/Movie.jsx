import React from "react";

const Movie = ({movie1}) => {
    return (
        <div className="container"> 
        <div className="movie">
            <p>{movie1.Year}</p>
        </div>
        <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
        </div>
        <div>
            <span> {movie1.Type}</span>
            <h3> {movie1.Title}</h3>
        </div>
 </div>
    )
}
export default Movie