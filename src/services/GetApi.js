// https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50
const getApiData = () => {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          poster: movie.poster,
          nameMovie: movie.movie,
          fullLine: movie.full_line,
          year: movie.year,
          director: movie.director,
          linkAudio: movie.audio,
          id: `${movie.movie}-${movie.full_line}-${movie.year}-${movie.current_wow_in_movie}-${movie.total_wows_in_movie}`,
        };
      });
      return dataClean;
    });
};

export default getApiData;
