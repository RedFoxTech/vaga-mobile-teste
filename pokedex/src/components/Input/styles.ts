import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 48%;
  height: 56px;
  padding: 0 16px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #444;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextError = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #c53030;
`;
