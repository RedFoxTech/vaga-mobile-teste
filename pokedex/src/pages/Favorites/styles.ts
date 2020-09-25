import styled from 'styled-components/native';
import colors from '../../global/styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
`;

export const PokemonList = styled.ScrollView`
  margin-top: -40px;
`;
