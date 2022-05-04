function MovieDetails(props) {
  return (
    <section className="listMoviesDetail">
      <img className="pictureMovies" src={props.movies.poster} alt="" />
      <h2 className="titleNameMovie">
        {props.movies.nameMovie} - {props.movies.year}
      </h2>
      <p className="fullName">{props.movies.fullLine}</p>
      <a className="linkAudio" href={props.movies.linkAudio}>
        Enlace audio
      </a>
    </section>
  );
}

export default MovieDetails;
