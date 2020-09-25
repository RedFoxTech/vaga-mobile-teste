import styled from 'styled-components/native';
import colors from '../../global/styles/colors';

import fonts from '../../global/styles/fonts';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
`;

export const FilterButtonText = styled.Text`
  color: #fff;
  font-family: ${fonts.RobotoRegular};
  font-size: 16px;
`;

export const SearchForm = styled.View`
  margin: 16px 0;
`;

export const Label = styled.Text`
  color: #fff;
  font-family: ${fonts.RobotoRegular};
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
