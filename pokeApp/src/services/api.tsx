import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default api;

// https://pokeapi.co/api/v2/pokemon/ditto
// https://pokeapi.co/api/v2/pokemon?limit=500 <-- pegando todos os pokemons
// https://pokeapi.co/api/v2/pokemon/${pokemon_name}

// https://pokeres.bastionbot.org/images/pokemon/10.png <-- API para as imagens