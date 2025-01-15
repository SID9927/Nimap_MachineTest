import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopRatedMoviePage from "./pages/TopRatedMoviePage";
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import SearchMoviePage from "./pages/SearchMoviePage";
import NavigationBar from "./components/NavigationBar";
import MovieDetailPage from "./pages/MovieDetailPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedMoviePage />} />
          <Route path="/upcoming" element={<UpcomingMoviePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
          <Route path="/search/:query" element={<SearchMoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}