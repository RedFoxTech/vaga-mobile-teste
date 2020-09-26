import React from 'react';

import { TypeText } from './styles';

export enum PokemonsTypesOptions {
  normal = 'normal',
  fighting = 'fighting',
  flying = 'flying',
  poison = 'poison',
  ground = 'ground',
  rock = 'rock',
  bug = 'bug',
  ghost = 'ghost',
  steel = 'steel',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  psychic = 'psychic',
  ice = 'ice',
  dragon = 'dragon',
  dark = 'dark',
  fairy = 'fairy',
  unknown = 'unknown',
  shadow = 'shadow',
}

interface PokemonTypeProps {
  type: PokemonsTypesOptions;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  return <TypeText type={type}>{type}</TypeText>;
};

export default PokemonType;
