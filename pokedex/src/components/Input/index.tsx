import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  selected: string;
  icon?: string;
}

const Input: React.FC<IInputProps> = ({ selected, icon, style, ...rest }) => {
  return (
    <Container style={style}>
      <Icon name={icon || ''} size={20} color="#FFF" />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#999"
        defaultValue={selected}
        {...rest}
      />
    </Container>
  );
};
export default Input;
