import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data, dispatch, setClickedOnStar, setClickedOnWatchlater}) => {
  const navigate = useNavigate()
  const starMovie = () => {
    dispatch({ type: "STAR_MOVIE", id: data.id });
    setClickedOnStar(false)
  };

  const addToWatchlist = () => {
    dispatch({ type: "ADD_TO_WATCHLIST", id: data.id });
    setClickedOnWatchlater(false)
  };

  const hanleOnClickMovie = () => {
    navigate(`/movie/${data.id}`)
  }

  return (
    <div className="movie-card">
      <img src={data.imageURL} alt={data.title} />
      <div onClick={hanleOnClickMovie} className="movie-info">
        <h3 >{data.title}</h3>
        <p>{data.summary}</p>
      </div>
      <div className="movie-buttons">
        {data?.starred ? (
          <button onClick={starMovie}>Starred</button>
        ) : (
          <button onClick={starMovie}>Star</button>
        )}
        {data?.addedToWatchlist ? (
          <button onClick={addToWatchlist}>Remove from Watchlist</button>
        ) : (
          <button onClick={addToWatchlist}>Add to Watchlist</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;