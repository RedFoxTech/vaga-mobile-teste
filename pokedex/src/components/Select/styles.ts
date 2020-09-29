import styled from 'styled-components/native';

import RNAutocompleteInput from 'react-native-autocomplete-input';

import fonts from '../../global/styles/fonts';
import colors from '../../global/styles/colors';

export const Container = styled.View`
  flex: 1;
  height: 80px;
`;

export const SelectField = styled.View`
  flex: 1;
  position: relative;
  padding: 0 12px;
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
  background: #fff;
  min-height: 56px;
  border-radius: 8px;
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
  listContainerStyle: {
    flex: 1,
    marginTop: -20,
  },
  listStyle: {
    margin: 0,
    maxHeight: 45,
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
  border-width: 0.5px;
  border-color: ${colors.primary};
  border-radius: 8px;
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
