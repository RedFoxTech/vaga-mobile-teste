import React, { useCallback } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import ashBackgroundImage from '../../assets/images/ash.png';
import redFoxLogo from '../../assets/images/redfox.png';
import pokedexLogo from '../../assets/images/pokedex.png';

import {
  BackgroundImage,
  LogoContainer,
  SmallLogo,
  BigLogo,
  SignInButton,
  SignInButtonText,
} from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigatetoDashboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <BackgroundImage source={ashBackgroundImage}>
      <LogoContainer>
        <BigLogo source={pokedexLogo} resizeMode="contain" />
        <SmallLogo source={redFoxLogo} resizeMode="contain" />
      </LogoContainer>

      <SignInButton onPress={handleNavigatetoDashboard}>
        <SignInButtonText>
          Saiba todas informações sobre as feras!
        </SignInButtonText>
        <MaterialIcon name="login" size={56} color="#fff" />
      </SignInButton>
    </BackgroundImage>
  );
};

export default Landing;
