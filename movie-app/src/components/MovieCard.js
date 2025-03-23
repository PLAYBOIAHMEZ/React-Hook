import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Rating: {movie.rating}</Card.Text>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
