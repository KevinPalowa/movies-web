const KEY = "1f26fdf0794ccc45f920074433eb11c6";

const BASE_URL = "https://api.themoviedb.org/3";
const requests = {
  requestPopular: `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=1`,
  requestTopRated: `${BASE_URL}/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  requestTrending: `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=2`,
  requestHorror: `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `${BASE_URL}/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
  requestNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
  requestTVPopular: `${BASE_URL}/tv/popular?api_key=${KEY}&language=en-US&page=1`,
};

export default requests;
