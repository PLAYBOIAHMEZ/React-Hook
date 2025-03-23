import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import moviesData from "./movies";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movie App 🎬</h1>
      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
