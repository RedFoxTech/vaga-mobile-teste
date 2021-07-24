import axios from 'axios'

const baseURL = 'https://pokeapi.co/api/v2/pokemon'

export const pokeApi = axios.create({
  baseURL
})