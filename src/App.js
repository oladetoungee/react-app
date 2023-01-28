import React, { useEffect } from "react";
import  './App.css'
import SearchButton from './search.svg'
import Movie from './Movie'
// eb3862a
const API_URL = "https://www.omdbapi.com?apikey=eb3862a"
const App = () => {
    const findMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search)
    }
    const movie1 = 
        {
            "Title": "True Romance",
            "Year": "1993",
            "imdbID": "tt0108399",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWRhYWJjNGEtMjNhNi00NzFkLTk1ZGUtNjNmM2FlNTNhNWRjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        }
    
    useEffect(() => {
        findMovies('romance')
    }, [])
    return(
     <div className="app">
         <h1>GeeMovies</h1>
         <div className="search">
            <input
            placeholder="Find your movies here"
            value="Titanic"
            onChange={() => {}}
            />
            <img
            src={SearchButton}
            alt="search"
            onClick={() => {}}
            />
         </div>
       <div className="container">
<Movie movie1={movie1}></Movie>
       </div>
     </div>
       

    )
}
export default  App;
