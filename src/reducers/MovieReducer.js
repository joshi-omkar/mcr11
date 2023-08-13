export const movieReducer = (state, action) => {
  switch (action.type) {
    case "STAR_MOVIE":
      const updatedMoviesStarred = state.movies.map((movie) =>
        movie.id === action.id ? { ...movie, starred: true } : movie
      );
      localStorage.setItem("movies", JSON.stringify(updatedMoviesStarred));
      return {
        ...state,
        movies: updatedMoviesStarred,
      };

    case "ADD_TO_WATCHLIST":
      const updatedMoviesWatchlist = state.movies.map((movie) =>
        movie.id === action.id ? { ...movie, addedToWatchlist: true } : movie
      );
      localStorage.setItem("movies", JSON.stringify(updatedMoviesWatchlist));
      return {
        ...state,
        movies: updatedMoviesWatchlist,
      };

    case "FILTER":
      if (
        action.genre === "All Genres" &&
        action.rating === "Rating" &&
        action.year === "Release Year"
      ) {
        return {
          ...state,
          filteredGenre: "All Genres",
          filteredRating: "Rating",
          filteredYear: "Release Year",
          filteredMovies: state.movies,
        };
      }
      const filteredByAll = state.movies.filter(
        (movie) =>
          (action.rating === "All Genres" ||
            movie.genre.includes(action.genre)) &&
          (action.rating === "Rating" || movie.rating <= action.rating) &&
          (action.year === "Release Year" || String(movie.year) === action.year)
      );
      return {
        ...state,
        filteredGenre: action.genre,
        filteredRating: action.rating,
        filteredYear: action.year,
        filteredMovies: filteredByAll,
      };

    case "ADD_MOVIE":
      const updatedMovies = [...state.movies, action.movieData];
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      return {
        ...state,
        movies: updatedMovies,
        filteredMovies: updatedMovies
      };

    default:
      return state;
  }
};
