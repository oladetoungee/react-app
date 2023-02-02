import React, { useEffect, useState } from "react";
import "./App.css";
import SearchButton from "./search.svg";
import Movie from "./Movie";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
// eb3862a
const API_URL = "https://www.omdbapi.com?apikey=eb3862a";
const App = () => {
  const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
  const findMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   
    setMovies(data.Search);
    
  };

  useEffect(() => {
    findMovies("Spiderman");
  }, []);
  return (
    <div className="app">
   
      <h1>GeeMovies</h1>
      <div className="search">
        <input
          placeholder="Find your movies here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchButton} alt="search" onClick={() => findMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (  <div className="container">
      
      {movies.map((movie) => (
        <Movie movie1={movie} key={movie.imdbID}/>
      ))}
    </div>) : (
        <div className="empty">
            <h2>NO MOVIES</h2>
        </div>
    )}
    
    </div>
  );
};
export default App;
