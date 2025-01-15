import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieCast,
  getMovieDetails,
  IMAGE_BASE_URL,
} from "../service/MovieDb";
import CastCard from "../components/CastCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);

  const fetchMovieDetails = async (movieId) => {
    const data = await getMovieDetails(movieId);
    setMovie(data);
    const castData = await getMovieCast(movieId);
    setCast(castData.cast.slice(0, 6));
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    width: "100%",
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-grid" style={backgroundStyle}>
        <div className="movie-info-section">
          <div className="movie-header">
            <img
              className="movie-thumbnail"
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-header-content">
              <h1>{movie.title}</h1>
              <div className="movie-meta">
                <span className="rating">Rating : {movie.vote_average}</span>
                <span className="runtime">{movie.runtime} min</span>
                <span className="release-date">
                  {new Date(movie.release_date).getFullYear()}
                </span>
              </div>
              <div className="genres">
                {movie.genres?.map((genre) => (
                  <span key={genre.id} className="genre-tag">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className="movie-poster-section">
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>

      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-grid">
          {cast.map((castMember) => (
            <CastCard key={castMember.id} castMember={castMember} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;