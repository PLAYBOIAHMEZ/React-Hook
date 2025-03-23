import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "center", margin: "20px" }}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (0-10)"
        value={newMovie.rating}
        onChange={handleChange}
        min="0"
        max="10"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
