import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search_icon.svg";
import MovieCard from "./MovieCard";
// 3bcb9b4b

const API_URL = "http://www.omdbapi.com?apikey=3bcb9b4b";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("SpiderMan");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        )
      ) : (
        <div className="empty">
          <h2>No Found Movies</h2>
        </div>
      )}
    </div>
  );
};
export default App;
