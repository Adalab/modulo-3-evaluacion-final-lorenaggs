import "../styles/App.scss";
import "../components/App";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function MovieScenelItem(props) {
  return (
    <>
      <Header />
      <section className="sectionItem">
        <img className="sectionItem__image" src={props.movies.poster} alt="" />
        <section className="sectionItem__contain">
          <section className="sectionItem__contain-info">
            <h2 className="sectionItem__contain-info-movie">
              {props.movies.nameMovie} - {props.movies.year}
            </h2>
            <p className="sectionItem__contain-info-fullLine">
              {props.movies.fullLine}
            </p>
            <a
              className="sectionItem__contain-info-audio"
              target="_blank"
              href={props.movies.linkAudio}
            >
              Escuchar audio
            </a>
          </section>
          <section className="sectionItem__contain-btn">
            <Link to={"/"}>
              <button className="sectionItem__contain-btn-return">
                REGRESAR
              </button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}

export default MovieScenelItem;
