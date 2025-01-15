import React, { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { getTopRatedMovies } from "../service/MovieDb";

const TopRatedMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    const data = await getTopRatedMovies(page);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  return (
    <div className="top-rated-page">
      <h1>Top Rated Movies</h1>
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