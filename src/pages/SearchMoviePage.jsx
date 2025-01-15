import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { searchMoviesByQuery } from "../slices/MoviesSlice";

const SearchMoviePage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(searchMoviesByQuery({ query, page: currentPage }));
  }, [dispatch, query, currentPage]);


  return (
    <div className="search-page">
      {/* <h1>Search Results for "{query}"</h1> */}
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SearchMoviePage;