import React from "react";
import { useData } from "../contexts/DataContext";
import MovieCard from "../components/MovieCard";
import './style.css'

const StarredMovies = () => {
  const { state, dispatch } = useData();

  const { movies } = state;

  console.log(movies)

  const starredMovies = movies.filter((item) => item?.starred === true);

  console.log(starredMovies)

  return (
    <div className="movies">
      {starredMovies.map((movie, key) => {
        return (
          <MovieCard
            data={movie}
            key={key}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default StarredMovies;
