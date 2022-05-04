// componente para la tarjeta de cada escena del listado
import MovieSceneDetail from "./MovieSceneDetail";
function MovieSceneItem(props) {
  const listMovies = props.dataMovies.map((movies, index) => {
    return (
      <li key={index} className="listMoviesDetail">
        <MovieSceneDetail movies={movies} />
      </li>
    );
  });
  return <ul className="listMovies">{listMovies}</ul>;
}

export default MovieSceneItem;
