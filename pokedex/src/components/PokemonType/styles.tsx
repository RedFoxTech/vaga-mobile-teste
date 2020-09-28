import styled from 'styled-components/native';

import fonts from '../../global/styles/fonts';

interface PokemonTypeTextProps {
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

const typeColors = {
  normal: '#a9a776',
  fighting: '#d2272d',
  flying: '#a88eef',
  poison: '#9c449a',
  ground: '#ddbd66',
  rock: '#b6a12e',
  bug: '#a8b71c',
  ghost: '#715899',
  steel: '#cecece',
  fire: '#ee7f2e',
  water: '#678ef3',
  grass: '#7ac64a',
  electric: '#ffeb00',
  psychic: '#ee5d86',
  ice: '#94d8d7',
  dragon: '#723bf0',
  dark: '#6f5a47',
  fairy: '#e19dea',
  unknown: '#020015',
  shadow: '#2b1b48',
};

export const TypeText = styled.Text<PokemonTypeTextProps>`
  font-family: ${fonts.Medium};
  color: #fff;
  font-size: 13px;
  margin: 4px 2px 0px 2px;
  border-radius: 8px;
  padding: 6px;
  line-height: 16px;

  background: ${({ type }) => typeColors[type]};
`;
