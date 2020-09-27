import React from 'react';
import { TextInputProps } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../global/styles/colors';

import { Container, InputField, Label, TextInput } from './styles';

interface IInputProps extends TextInputProps {
  label: string;
  clearField(): void;
}

const Input: React.FC<IInputProps> = ({
  label,
  clearField,
  style,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>

      <InputField style={style}>
        <TextInput placeholderTextColor="#999" {...rest} />
        <TouchableWithoutFeedback onPress={clearField}>
          <MaterialIcon name="clear" size={24} color={colors.primary} />
        </TouchableWithoutFeedback>
      </InputField>
    </Container>
  );
};
export default Input;
