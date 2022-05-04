// componente para la tarjeta de cada escena del listado
import MovieSceneDetail from "./MovieSceneDetail";
import { Link } from "react-router-dom";

function MovieSceneItem(props) {
  const listMovies = props.dataMovies.map((movies) => {
    return (
      <Link to={`/movie/${movies.id}`}>
        <li id={movies.id} className="listMoviesDetail">
          <MovieSceneDetail movies={movies} />
        </li>
      </Link>
    );
  });

  return <ul className="listMovies">{listMovies}</ul>;
}


export default MovieSceneItem;
