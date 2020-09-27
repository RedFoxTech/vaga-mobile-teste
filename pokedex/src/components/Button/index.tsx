import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, loading, ...rest }) => (
  <Container enabled={!loading} {...rest}>
    {loading ? (
      <ButtonText>Carregando...</ButtonText>
    ) : (
      <ButtonText>{title}</ButtonText>
    )}
  </Container>
);

export default Button;
