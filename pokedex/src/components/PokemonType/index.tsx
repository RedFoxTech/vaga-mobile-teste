import React, { useMemo } from 'react';

import { TypeText } from './styles';

interface PokemonTypeProps {
  type:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'unknown'
    | 'shadow';
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type, ...rest }) => {
  const pokemonTypes = useMemo(
    () => [
      'normal',
      'fighting',
      'flying',
      'poison',
      'ground',
      'rock',
      'bug',
      'ghost',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
      'unknown',
      'shadow',
    ],
    [],
  );

  const isPokemonType = pokemonTypes.includes(type);

  return (
    <TypeText type={isPokemonType ? type : 'unknown'} {...rest}>
      {type}
    </TypeText>
  );
};

export default PokemonType;
