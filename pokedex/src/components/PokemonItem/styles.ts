import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../global/styles/colors';

import fonts from '../../global/styles/fonts';

interface FavoriteButtonProps extends RectButtonProperties {
  isFavorited: boolean;
}

export const Container = styled.View`
  background: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  padding: 24px;
`;

export const Profile = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 74px;
  height: 74px;
  border-radius: 37px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View``;

export const Name = styled.Text`
  font-family: ${fonts.RobotoBold};
  color: #32264d;
  font-size: 20px;
  text-transform: capitalize;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  padding-right: 16px;
`;

export const Type = styled.Text`
  font-family: ${fonts.RobotoRegular};
  color: #6a6180;
  font-size: 12px;
  margin: 4px 2px 0px 2px;
`;

export const ExperienceContainer = styled.View`
  background: #fafafc;
  align-items: center;
  padding: 0 16px;
`;

export const ExperienceText = styled.Text`
  font-family: ${fonts.RobotoBold};
  color: ${colors.primaryVariant};
  font-size: 14px;
  margin-top: -12px;
`;

export const ExperienceValue = styled.Text`
  font-family: ${fonts.RobotoBold};
  color: ${colors.primaryVariant};
  font-size: 48px;
`;

export const FavoriteButton = styled(RectButton)<FavoriteButtonProps>`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -12px;
  top: -12px;
`;

export const AbilitiesLabel = styled.Text`
  font-family: ${fonts.RobotoMedium};
  color: #6a6180;
  font-size: 14px;
  margin: 8px 0 0 8px;
`;

export const AbilitiesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  overflow: hidden;
`;

export const Abilities = styled.Text`
  font-family: ${fonts.RobotoRegular};
  color: #6a6180;
  font-size: 12px;
  margin: 4px 2px 0px 2px;
  border: 0.5px;
  border-radius: 8px;
  padding: 4px;
  border-color: #6a6180;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 16px 16px 0 16px;
  justify-content: center;
`;

export const InfoButton = styled(RectButton)``;

export const InfoButtonText = styled.Text`
  color: #04d361;
  font-family: ${fonts.RobotoBold};
  font-size: 16px;
`;