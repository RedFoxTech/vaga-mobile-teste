import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../global/styles/colors';

import fonts from '../../global/styles/fonts';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
`;

export const Content = styled.View`
  background: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin: -80px 16px 16px 16px;
  overflow: hidden;
  padding: 48px 24px 24px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyAvatar = styled.View`
  height: 80px;
`;

export const Avatar = styled.Image`
  width: 240px;
  height: 240px;
  align-self: center;
  margin-top: -10px;
  z-index: 1;
`;

export const ProfileInfo = styled.View``;

export const Name = styled.Text`
  font-family: ${fonts.Bold};
  color: #32264d;
  font-size: 24px;
  text-transform: capitalize;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  padding-right: 16px;
`;

export const Type = styled.Text`
  font-family: ${fonts.Regular};
  color: #6a6180;
  font-size: 16px;
  margin: 4px 2px 0px 2px;
`;

export const ExperienceContainer = styled.View`
  background: #fafafc;
  align-items: flex-end;
  padding: 0 16px;
`;

export const ExperienceText = styled.Text`
  font-family: ${fonts.Bold};
  color: ${colors.primaryVariant};
  font-size: 16px;
  margin-top: -12px;
`;

export const ExperienceValue = styled.Text`
  font-family: ${fonts.Bold};
  color: ${colors.primaryVariant};
  font-size: 48px;
`;

export const FavoriteButton = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #6a6180;
  margin-top: 16px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const DetailsLabel = styled.Text`
  font-family: ${fonts.Medium};
  color: #6a6180;
  font-size: 16px;
`;

export const DetailsText = styled.Text`
  font-family: ${fonts.Regular};
  color: #6a6180;
  font-size: 16px;
`;

export const AbilitiesLabel = styled.Text`
  font-family: ${fonts.Medium};
  color: #6a6180;
  font-size: 16px;
  margin-top: 8px;
`;

export const Abilitiy = styled.Text`
  font-family: ${fonts.Regular};
  color: #6a6180;
  font-size: 16px;
  margin: 4px 2px 0px 2px;
  border: 0.5px;
  border-radius: 8px;
  padding: 4px;
  border-color: #6a6180;
`;

export const StatsLabel = styled.Text`
  font-family: ${fonts.Medium};
  color: #6a6180;
  font-size: 16px;
  margin-top: 8px;
`;

export const Stat = styled.Text`
  font-family: ${fonts.Regular};
  color: #6a6180;
  font-size: 16px;
  margin: 4px 2px 0px 2px;
  border: 0.5px;
  border-radius: 8px;
  padding: 4px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 16px 16px 0 16px;
  justify-content: center;
`;

export const InfoButton = styled(BorderlessButton)`
  flex: 1;
  align-items: center;
  padding: 8px 0;
`;

export const InfoButtonText = styled.Text`
  color: #04d361;
  font-family: ${fonts.Bold};
  font-size: 16px;
`;
