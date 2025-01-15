import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { searchMovies } from "../service/MovieDb";

const SearchMoviePage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies(query, currentPage);
  }, [query, currentPage]);

  const fetchMovies = async (query, page) => {
    const data = await searchMovies(query, page);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  return (
    <div className="search-page">
      <h1>Search Results for "{query}"</h1>
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