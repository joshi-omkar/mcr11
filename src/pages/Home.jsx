import React, { useEffect, useState } from "react";
import "./style.css";
import { useData } from "../contexts/DataContext";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, setData, dispatch, state } = useData();
  const navigate = useNavigate();

  console.log(state);

  const { movies, filteredMovies } = state;

  const Genres = [
    "All Genres",
    "Action",
    "Crime",
    "Drama",
    "Adventure",
    "Fantasy",
    "Romance",
    "Sci-Fi",
    "Biography",
  ];
  const releasedYear = [
    "Relaease Year",
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2019,
    2020,
    2021,
    2022,
    2023,
  ];

  const rating = ["Rating", 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedReleaseYear, setSelectedReleaseYear] =
    useState("Release Year");
  const [selectedRating, setSelectedRating] = useState("Rating");
  const [clickedOnStar, setClickedOnStart] = useState(false);
  const [clickedOnWatchlater, setClickedOnWatchlater] = useState(false);

  const handleGenreChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);
    dispatch({
      type: "FILTER",
      genre: event.target.value,
      rating: selectedRating,
      year: selectedReleaseYear,
    });
  };

  const handleReleasrYearChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedReleaseYear(selectedValue);
    dispatch({
      type: "FILTER",
      genre: selectedGenre,
      rating: selectedRating,
      year: event.target.value,
    });
  };

  const handleRating = (event) => {
    const selectedValue = event.target.value;
    setSelectedRating(selectedValue);
    dispatch({
      type: "FILTER",
      genre: selectedGenre,
      rating: selectedValue,
      year: selectedReleaseYear,
    });
  };

  // useEffect(()=>{
  //   setData(data)
  // }, [clickedOnWatchlater, clickedOnStar])

  const handleAddNewMovie = (e) => {
    navigate("/addMovie");
  };

  return (
    <div>
      <div className="movies-filters">
        <h2>Movies</h2>
        <div>
          <select value={selectedGenre} onChange={handleGenreChange}>
            {Genres.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleReleasrYearChange}>
            {releasedYear.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select onChange={handleRating}>
            {rating.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={handleAddNewMovie}>Add a Movie</button>
        </div>
      </div>
      <div className="movies">
        {filteredMovies.map((movie, key) => {
          return (
            <MovieCard
              data={movie}
              key={key}
              dispatch={dispatch}
              setClickedOnStart={setClickedOnStart}
              setClickedOnWatchlater={setClickedOnWatchlater}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
