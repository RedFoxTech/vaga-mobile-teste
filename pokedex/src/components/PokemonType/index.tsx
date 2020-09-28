import React, { useMemo } from 'react';

import { TypeText } from './styles';

interface PokemonTypeProps {
  type: any; //eslint-disable-line
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

  const isUnknownType = !pokemonTypes.includes(type);

  return (
    <TypeText type={isUnknownType ? 'unknown' : type} {...rest}>
      {type}
    </TypeText>
  );
};

export default PokemonType;
