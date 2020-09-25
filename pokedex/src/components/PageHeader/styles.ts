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

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${fonts.RobotoBold};
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 0 30px;
`;
