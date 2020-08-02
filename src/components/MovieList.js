import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = (props) => {
  const movies = props.movies;
  const movieListItems = movies.map((movie) => {
    return <MovieListItem key={movie._id} movie={movie}/>
  })

  return (
    <div>{movieListItems}</div>
  )
}

export default MovieList;