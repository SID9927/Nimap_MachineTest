import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import { fetchPopularMovies } from "../slices/MoviesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies=useSelector((state)=>state.movies.movies);
  const status=useSelector((state)=>state.movies.status);
  const error = useSelector((state) => state.movies.error);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    dispatch(fetchPopularMovies(currentPage));
  },[dispatch,currentPage]);
  

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home-page">
      {/* <h1>Popular Movies</h1> */}
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;