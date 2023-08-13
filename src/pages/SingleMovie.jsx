import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import "./style.css";

export const SingleMovie = () => {
  const { data, dispatch } = useData();

  const { id } = useParams();

  const movie = data.find((item) => item.id === Number(id));

  const starMovie = () => {
    dispatch({ type: "STAR_MOVIE", id: movie.id });
  };

  const addToWatchlist = () => {
    dispatch({ type: "ADD_TO_WATCHLIST", id: movie.id });
  };

  return (
    <div className="singleMovie">
      <img src={movie.imageURL} alt={movie.title} />
      <div className="single-movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <p>writer: {movie.writer}</p>
        <p>director: {movie.director}</p>
        <p>rating: {movie.rating}</p>
        <p>year: {movie.year}</p>
        <p>
          genres:{" "}
          {movie.genre.map((item, key) => {
            return (
              <div key={key}>
                <p>{item}</p>
              </div>
            );
          })}
        </p>
        <div className="movie-buttons">
          {movie?.starred ? (
            <button onClick={starMovie}>Starred</button>
          ) : (
            <button onClick={starMovie}>Star</button>
          )}
          {movie?.addedToWatchlist ? (
            <button onClick={addToWatchlist}>Remove from Watchlist</button>
          ) : (
            <button onClick={addToWatchlist}>Add to Watchlist</button>
          )}
        </div>
      </div>
    </div>
  );
};
