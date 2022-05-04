// componente para la tarjeta de cada escena del listado
import MovieSceneDetail from "./MovieSceneDetail";
function MovieSceneItem(props) {
  const listMovies = props.dataMovies.map((movies, index) => {
    return (
      <li key={index}>
        <MovieSceneDetail movies={movies} />
      </li>
    );
  });
  return (
    <section>
      <ul>{listMovies}</ul>
    </section>
  );
}

export default MovieSceneItem;
