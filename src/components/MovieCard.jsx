import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  data,
  dispatch,
}) => {
  const navigate = useNavigate();
  const starMovie = () => {
    dispatch({ type: "STAR_MOVIE", id: data.id });
  };

  const UnStarMovie = () => {
    dispatch({ type: "UNSTAR_MOVIE", id: data.id });
  };

  const addToWatchlist = () => {
    dispatch({ type: "ADD_TO_WATCHLIST", id: data.id });
  };

  const RemoveToWatchlist = () => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", id: data.id });
  };

  const hanleOnClickMovie = () => {
    navigate(`/movie/${data.id}`);
  };

  return (
    <div className="movie-card">
      <img src={data.imageURL} alt={data.title} />
      <div onClick={hanleOnClickMovie} className="movie-info">
        <h3>{data.title}</h3>
        <p>{data.summary}</p>
      </div>
      <div className="movie-buttons">
        {data?.starred ? (
          <button onClick={UnStarMovie}>Starred</button>
        ) : (
          <button onClick={starMovie}>Star</button>
        )}
        {data?.addedToWatchlist ? (
          <button onClick={RemoveToWatchlist}>Remove from Watchlist</button>
        ) : (
          <button onClick={addToWatchlist}>Add to Watchlist</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
