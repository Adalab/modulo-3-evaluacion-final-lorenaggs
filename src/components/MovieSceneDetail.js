// componente para el detalle de cada escena del listado

function MovieSceneDetail(props) {
  return (
    <section className="listMoviesDetail">
      <img className="pictureMovies" src={props.movies.poster} alt="" />
      <h2 className="titleNameMovie">
        {props.movies.nameMovie} - {props.movies.year}
      </h2>
      <p className="fullName">{props.movies.fullLine}</p>
    </section>
  );
}

export default MovieSceneDetail;
