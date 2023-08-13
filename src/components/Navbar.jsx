import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useData } from "../contexts/DataContext";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch } = useData();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    dispatch({ type: "SEARCH", searchQuery: searchQuery });
  }, [searchQuery]);

  return (
    <div className="navbar">
      <h2>IMDB</h2>
      <input
        type="text"
        placeholder="Search by title, cast, or director"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="navbar-links">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/starredMovies">Starred Movies</Link>
      </div>
    </div>
  );
};

export default Navbar;
