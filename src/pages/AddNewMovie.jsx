import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import "./style.css";
import { useNavigate } from "react-router-dom";

const AddNewMovie = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_MOVIE", movieData: formData });
    setFormData({
      id: "",
      title: "",
      year: "",
      genre: "",
      rating: "",
      director: "",
      writer: "",
      cast: "",
      summary: "",
      imageURL: "",
    });
    navigate('/')
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="director">Director:</label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="writer">Writer:</label>
        <input
          type="text"
          id="writer"
          name="writer"
          value={formData.writer}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="cast">Cast:</label>
        <input
          type="text"
          id="cast"
          name="cast"
          value={formData.cast}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          style={{ height: "100px" }}
          required
        ></textarea>

        <label htmlFor="imageURL">Image URL:</label>
        <input
          type="url"
          id="imageURL"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddNewMovie;
