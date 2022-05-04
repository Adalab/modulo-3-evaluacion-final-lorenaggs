// componente para el detalle de cada escena del listado

function MovieSceneDetail(props) {
  return (
    <>
      <img className="pictureMovies" src={props.movies.poster} alt="" />
      <h2>
        {props.movies.nameMovie} - {props.movies.year}
      </h2>
      <p>{props.movies.fullLine}</p>
    </>
  );
}

export default MovieSceneDetail;
