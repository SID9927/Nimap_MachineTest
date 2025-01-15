import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const initialState = {
  movies: [],
  moviesDetails: {},
  cast: [],
  status: "idle",
  error: null,
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (page) => {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => res.json());
    return response.results;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async (page) => {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => res.json());
    return response.results;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async (page) => {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    ).then((res) => res.json());
    return response.results;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (movieId) => {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    ).then((res) => res.json());
    return response;
  }
);

export const fetchMovieCast = createAsyncThunk(
  "movies/fetchMovieCast",
  async (movieId) => {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    ).then((res) => res.json());
    return response.cast;
  }
);

export const searchMoviesByQuery = createAsyncThunk(
  "movies/searchMoviesByQuery",
  async ({ query, page }) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    ).then((res) => res.json());
    return response.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieCast.fulfilled, (state, action) => {
        state.cast = action.payload;
      })
      .addCase(searchMoviesByQuery.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export default moviesSlice.reducer;
export {IMAGE_BASE_URL}