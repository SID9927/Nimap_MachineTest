import React, { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { getPopularMovies } from "../service/MovieDb";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    const data = await getPopularMovies(page);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  return (
    <div className="home-page">
      {/* <h1>Popular Movies</h1> */}
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;