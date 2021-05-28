export const api_url = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonList = async () => {
  const response = await fetch(api_url).then(data => data.json());

  return response;
};
