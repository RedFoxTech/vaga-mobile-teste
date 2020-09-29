import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
  loading?: boolean;
  style: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, loading, style, ...rest }) => (
  <Container enabled={!loading} style={style} {...rest}>
    {loading ? (
      <ButtonText>Carregando...</ButtonText>
    ) : (
      <ButtonText>{title}</ButtonText>
    )}
  </Container>
);

export default Button;
