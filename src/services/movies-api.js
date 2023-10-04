import axios from 'axios';

const BASE_URL = 'https:api.themoviedb.org/3';
const API_KEY = '05fecd37f4938abe676372f3977174d8';
axios.defaults.params = {
  api_key: API_KEY,
};

export async function getMovies() {
  return (await axios.get(`${BASE_URL}/trending/all/day`)).data;
}

export async function getMoveDetails(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}`)).data;
}
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'

export async function getCastMovie(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/credits`)).data;
}
