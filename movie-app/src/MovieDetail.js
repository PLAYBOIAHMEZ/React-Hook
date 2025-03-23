import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "./movies";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate("/")} className="btn btn-primary">
        Back to Home
      </button>
    </div>
  );
};

export default MovieDetail;
