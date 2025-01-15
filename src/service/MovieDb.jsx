const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getPopularMovies = (page = 1) =>
  fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());

export const getTopRatedMovies = (page = 1) =>
  fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());

export const getUpcomingMovies = (page = 1) =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((res) => res.json());

export const getMovieDetails = (movieId) =>
  fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(
    (res) => res.json()
  );

export const getMovieCast = (movieId) =>
  fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());

export const searchMovies = (query, page = 1) =>
  fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  ).then((res) => res.json());

export { IMAGE_BASE_URL };