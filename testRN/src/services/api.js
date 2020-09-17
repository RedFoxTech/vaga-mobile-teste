import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-pokemons.herokuapp.com/',
});

export default api;
