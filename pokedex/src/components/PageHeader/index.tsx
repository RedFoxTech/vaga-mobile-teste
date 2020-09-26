import React, { useCallback, ReactNode } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/pokeball.png';

import {
  Container,
  TobBar,
  LogoImage,
  BottomBar,
  Title,
  HeaderRight,
} from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <TobBar>
        <BorderlessButton onPress={handleGoBack}>
          <MaterialIcon name="keyboard-backspace" size={24} color="#fff" />
        </BorderlessButton>
        <LogoImage source={logoImg} resizeMode="contain" />
      </TobBar>

      <BottomBar>
        <Title>{title}</Title>

        <HeaderRight>{headerRight}</HeaderRight>
      </BottomBar>
      {children}
    </Container>
  );
};

export default PageHeader;
