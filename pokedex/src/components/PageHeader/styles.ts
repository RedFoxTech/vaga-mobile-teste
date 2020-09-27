import styled from 'styled-components/native';
import fonts from '../../global/styles/fonts';

import colors from '../../global/styles/colors';

export const Container = styled.View`
  padding: 30px 30px 60px 30px;
  background-color: ${colors.primaryVariant};
`;

export const TobBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const LogoImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const HeaderRight = styled.View`
  align-items: flex-end;
`;

export const FiltersButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 4px;
`;

export const CleanFiltersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

export const CleanFilterButtonText = styled.Text`
  color: ${colors.red};
  font-family: ${fonts.Regular};
  font-size: 16px;
`;

export const Title = styled.Text`
  font-family: ${fonts.Bold};
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 192px;
  margin-left: 20px;
  text-transform: capitalize;
`;

export const FilterButtonText = styled.Text`
  color: #fff;
  font-family: ${fonts.Regular};
  font-size: 16px;
`;

export const SearchForm = styled.View`
  margin: 16px 0;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;
