import React, { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { getUpcomingMovies } from "../service/MovieDb";

const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    const data = await getUpcomingMovies(page);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  return (
    <div className="upcoming-page">
      <h1>Upcoming Movies</h1>
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UpcomingMoviePage;