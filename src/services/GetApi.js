// https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50
const getApiData = () => {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie) => {
        return {
          poster: movie.poster,
          nameMovie: movie.movie,
          fullLine: movie.full_line,
          year: movie.year,
          director: movie.director,
          linkAudio: movie.audio,
        };
      });
      console.log(dataClean);
      return dataClean;
    });
};

export default getApiData;
