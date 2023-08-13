import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>IMDB</h2>
      <input placeholder="Search movies by title, cast, and director" />
      <div className="navbar-links">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/starredMovies">Starred Movies</Link>
      </div>
    </div>
  );
};

export default Navbar;
