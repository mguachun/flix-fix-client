import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
export default function Home () {
  
  const [movies, setMovies] = useState([]);
  // const fetchMovies = async () => {
  //   const response = await axios("http://localhost:3000/movies");
  //   setMovies(response.data);
  // }
  
  
  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(resp => resp.json())
    .then(movieData => setMovies(movieData))
    
  }, []);
  console.log(movies)

  return movies ?(

    <div>
      <h1>Movies:</h1>
    {  movies.map( (movie) => <MovieCard title={movie.title} year={movie.year} director={movie.director} review={movie.review} genre={movie.genre}/> ) }

    
    </div>
  ) : "Loading"
};

