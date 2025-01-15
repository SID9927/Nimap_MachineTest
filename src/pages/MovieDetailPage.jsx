import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, fetchMovieCast, IMAGE_BASE_URL } from "../slices/MoviesSlice";
import CastCard from "../components/CastCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movieDetails);
  const cast = useSelector((state) => state.movies.cast);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchMovieCast(movieId));
  }, [dispatch, movieId]);

  const backgroundStyle = movie && movie.backdrop_path ? {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${IMAGE_BASE_URL}${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    width: "100%",
  }:{};

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-grid" style={backgroundStyle}>
        <div className="movie-info-section">
          <div className="movie-header">
          {movie && movie.poster_path && (
            <img
              className="movie-thumbnail"
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          {movie && (
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
            )}
          </div>
          {movie && (
          <div className="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          )}
        </div>
        {movie && movie.poster_path && (
        <div className="movie-poster-section">
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        )}
      </div>

      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-grid">
        {cast.slice(0, 6).map((member) => (
          <CastCard key={member.id} cast={member} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;