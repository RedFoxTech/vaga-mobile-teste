import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import fonts from '../../global/styles/fonts';
import colors from '../../global/styles/colors';

export const Container = styled.View`
  width: 48%;
`;

export const InputField = styled.View`
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

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.primary};
  font-size: 16px;
  font-family: ${fonts.Regular};
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 16px;
`;
