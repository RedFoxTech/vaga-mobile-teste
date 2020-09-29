import styled from 'styled-components/native';
import colors from '../../global/styles/colors';
import fonts from '../../global/styles/fonts';

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.3);

  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Content = styled.View`
  flex: 1;
  align-self: stretch;
  background: #fff;
  border-radius: 8px;

  padding: 32px 16px;
`;

export const ExitButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  align-self: flex-end;
  margin-top: -16px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
  align-self: center;
`;

export const Name = styled.Text`
  font-family: ${fonts.Bold};
  color: #32264d;
  font-size: 24px;
  text-transform: capitalize;
`;

export const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #6a6180;
  margin-top: 8px;
`;

export const LocationsLabel = styled.Text`
  font-family: ${fonts.Medium};
  color: #6a6180;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Location = styled.Text`
  font-family: ${fonts.Regular};
  color: #6a6180;
  font-size: 16px;
  margin: 4px 2px 0px 2px;
  border: 0.5px;
  border-radius: 8px;
  padding: 4px;
  border-color: #6a6180;
`;

export const EmptyText = styled.Text`
  font-family: ${fonts.Medium};
  font-size: 16px;
  color: ${colors.primaryVariant};
  text-align: center;
`;
