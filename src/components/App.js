import "../styles/App.scss";
import { useState, useEffect } from "react";
import getApiData from "../services/GetApi";
import MovieSceneItem from "./MovieSceneItem";
import Filters from "./Filters";

function App() {
  // Variables de Estado
  const [dataMovies, setDataMovies] = useState([]);
  const [inputMovie, setInputMovie] = useState("");
  const [filterYear, setFilterYear] = useState([]);

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

  // const filterMovies = dataMovies.filter((allMovies) => {
  // allMovies.nameMovie.toLowerCase().includes(inputMovie.toLowerCase());
  // });

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const getYears = () => {
    const yearMovies = dataMovies.map((movies) => movies.year);
    const year = new Set(yearMovies);
    const uniqueYear = [...year];
    return uniqueYear;
  };

  // Returno de componente APP
  return (
    <div className="App">
      <h1>Owen Wilson's "wow"</h1>
      <Filters
        handleFilterMovie={handleFilterMovie}
        handleFilterYear={handleFilterYear}
        year={getYears()}
      />
      <MovieSceneItem dataMovies={dataMovies} />
    </div>
  );
}

export default App;
