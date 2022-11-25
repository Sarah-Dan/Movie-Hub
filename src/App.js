import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

// import { HomePage } from "./pages";

// Api key = aa702c3d

const API_URL = "https://www.omdbapi.com?apikey=aa702c3d";

// ROOT COMPONENT
const App = () => {
   const [movies, setMovies] = useState([]);
   const [searchValue, setSearchValue] = useState("");
 

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <p className="description">The hub of great movies for movie buffs!</p>
      <div className="search__box">
        <input
          type="text"
          placeholder="Search for your favorite movie..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          className="search__img"
          src={SearchIcon}
          alt="search__icon"
          onClick={() => searchMovies(searchValue)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no__movies">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
