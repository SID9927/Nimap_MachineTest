import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { fetchTopRatedMovies } from "../slices/MoviesSlice";

const TopRatedMoviePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTopRatedMovies(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="top-rated-page">
      {/* <h1>Top Rated Movies</h1> */}
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TopRatedMoviePage;