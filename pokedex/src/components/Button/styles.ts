import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../global/styles/colors';

export const Container = styled(RectButton)`
  height: 56px;
  background: ${colors.successVariant};
  border-radius: 8px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #fff;
`;
