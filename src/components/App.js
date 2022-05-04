import "../styles/App.scss";
import { useState, useEffect } from "react";
import getApiData from "../services/GetApi";
import MovieSceneItem from "./MovieSceneItem";
import Filters from "./Filters";

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovies(dataFromApi);
    });
  }, []);

  console.log(dataMovies);
  return (
    <div className="App">
      <h1>Owen Wilson's "wow"</h1>
      <Filters dataMovies={dataMovies} />
      <MovieSceneItem dataMovies={dataMovies} />
    </div>
  );
}

export default App;
