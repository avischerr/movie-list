import React from "react";
import App from "./App"

var MovieList = (props) => {
  console.log("movie list");
  return (
    <ol>
      {props.movies.map((movie) => {
          return (
            <li>{movie.title}</li>
          )
        })}
    </ol>
  )
}

export default MovieList;

/*
  [
  {title: 'The Matrix'},
  {title: 'Hackers'},
  {title: 'Johnny Mnemonic'},
  {title: 'eXistenZ'},
  {title: 'RoboCop'}
  ]
  */