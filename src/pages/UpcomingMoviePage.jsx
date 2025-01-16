import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { fetchUpcomingMovies } from "../slices/MoviesSlice";

const UpcomingMoviePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUpcomingMovies(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="upcoming-page">
      {/* <h1>Upcoming Movies</h1> */}
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UpcomingMoviePage;