import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../slices/MoviesSlice";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </Link>
  );
};

export default MovieCard;