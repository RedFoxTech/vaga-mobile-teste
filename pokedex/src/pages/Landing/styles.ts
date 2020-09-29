import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '../../global/styles/colors';
import fonts from '../../global/styles/fonts';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: ${colors.primaryVariant};

  align-items: center;
  padding: 32px;
  justify-content: space-between;
`;
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background: ${colors.primaryVariant};

  align-items: center;
  padding: 32px;
  justify-content: space-around;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-top: 300px;
`;

export const SmallLogo = styled.Image`
  width: ${width * 0.4}px;
  height: 70px;
  margin-top: -32px;
`;
export const BigLogo = styled.Image`
  width: ${width * 0.9}px;
`;

export const SignInButton = styled(BorderlessButton)`
  flex-direction: row;
  padding: 16px;
  align-items: center;
`;

export const SignInButtonText = styled.Text`
  font-family: ${fonts.Bold};
  font-size: 24px;
  color: #fff;
  text-align: right;
`;
