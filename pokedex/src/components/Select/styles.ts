import styled from 'styled-components/native';

import RNAutocompleteInput from 'react-native-autocomplete-input';

import fonts from '../../global/styles/fonts';
import colors from '../../global/styles/colors';

export const Container = styled.View`
  width: 48%;
  height: 80px;
`;

export const SelectField = styled.View`
  flex: 1;
  position: relative;
  height: 56px;
  padding: 0 12px;
  background: #fff;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-family: ${fonts.Regular};
  margin: 0 0 4px 4px;
`;

export const SelectContainer = styled.View`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const SelectInput = styled(RNAutocompleteInput).attrs({
  inputContainerStyle: {
    borderWidth: 0,
    paddingVertical: 6,
    paddingHorizontal: 12,
    paddingRight: 32,
  },
  listStyle: {
    margin: 0,
    marginTop: -20,
    maxHeight: 40,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
})`
  flex: 1;
  font-size: 16px;
  color: ${colors.primary};
`;

export const OptionText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  padding: 0 6px;
  margin: 2px;
  text-transform: capitalize;
`;

export const ClearFilterButton = styled.View`
  position: absolute;
  z-index: 1;
  right: 12px;
`;
