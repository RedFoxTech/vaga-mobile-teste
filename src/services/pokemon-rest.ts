import Api from "./api";
import Axios from "axios";

import { IPokemon } from "../models/IPokemon";
import axios from "axios";

export const getPokemons = async (offset: number): Promise<IPokemon[]> => {
  console.log("Calling api from offset: ", offset);
  let pokemons = await Api.get(`/pokemon?offset=${offset}&limit=20`);
  let response: IPokemon[] = [];

  for (const pokemon of pokemons.data.results) {
    let infos = await getPokemonInfos(pokemon.url);
    response.push(infos);
  }

  return response;
};

export const getPokemonInfos = async (url: string): Promise<IPokemon> => {
  let infos = await Axios.get(url);

  let moves: string[] = [];
  let types: string[] = [];
  let abilities: string[] = [];
  infos.data.moves.forEach((move: any) => {
    moves.push(move.move.name);
  });

  infos.data.types.forEach((type: any) => {
    types.push(type.type.name);
  });

  infos.data.abilities.forEach((ability: any) => {
    abilities.push(ability.ability.name);
  });

  let pokemon = {
    name: infos.data.species.name,
    url: infos.data.species.url,
    types: types,
    moves: moves,
    abilities: abilities,
    img: infos.data.sprites.front_default,
    stats: {
      height: infos.data.height / 10,
      weight: infos.data.weight / 10,
      attack: infos.data.stats[1].base_stat,
      defense: infos.data.stats[2].base_stat,
      specialAttack: infos.data.stats[3].base_stat,
      pecialDefense: infos.data.stats[4].base_stat,
      speed: infos.data.stats[5].base_stat,
      hp: infos.data.stats[0].base_stat,
    },
  };
  return pokemon;
};
