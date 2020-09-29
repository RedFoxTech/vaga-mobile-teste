import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import fonts from '../../global/styles/fonts';

import colors from '../../global/styles/colors';
import Select from '../Select';

export const Container = styled.View`
  padding: 30px 30px 60px 30px;
  background-color: ${colors.primaryVariant};
`;

export const TobBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
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

export const ListOrderGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const DefaultOrderButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4px;
`;

export const NameOrderButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 4px;
`;

export const ListOrderLabel = styled.Text`
  color: #fff;
  font-family: ${fonts.Regular};
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

export const FiltersButton = styled(BorderlessButton)`
  padding: 4px;
  flex-direction: row;
  align-items: center;
`;

export const SearchForm = styled.View`
  margin: 16px 0;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TypeSelect = styled(Select)`
  margin-right: 8px;
`;
export const NameSelect = styled(Select)`
  margin-left: 8px;
`;
