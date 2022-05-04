import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";
import getApiData from "../services/GetApi";
import MovieSceneItem from "./MovieSceneItem";
import Filters from "./Filters";
import MovieDetails from "./MovieDetails";

function App() {
  // Variables de Estado
  const [dataMovies, setDataMovies] = useState([]);
  const [inputMovie, setInputMovie] = useState("");
  const [filterYear, setFilterYear] = useState("");

  // Trae datos de la API
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
    });
  }, []);

  // función que envia el listado de peliculas
  const handleFilterMovie = (value) => {
    setInputMovie(value);
  };

  // filtro de peliculas por nombre de pelicula
  const moviesFilterName = dataMovies
    .filter((movies) => {
      return inputMovie === ""
        ? true
        : movies.nameMovie.toLowerCase().includes(inputMovie.toLowerCase());
    })
    .filter((movies) => {
      if (filterYear === "") {
        return dataMovies;
      } else {
        return filterYear.includes(movies.year);
      }
    });

  // filter de peliculas por año

  // guardo el valor del input para filtrar por año
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const getYears = () => {
    const yearMovies = dataMovies.map((movies) => movies.year);
    const year = new Set(yearMovies);
    const uniqueYear = [...year];
    return uniqueYear;
  };

  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((movies) => movies.id === movieId);

  // Returno de componente APP
  return (
    <div className="App">
      <h1 className="title">Owen Wilson's "wow"</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterMovie={handleFilterMovie}
                handleFilterYear={handleFilterYear}
                year={getYears()}
              />
              <MovieSceneItem dataMovies={moviesFilterName} />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieDetails movies={movieFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
