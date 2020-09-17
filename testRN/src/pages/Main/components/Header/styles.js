import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
  padding: 20px 0 0 0;
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.background && props.background == 'red'
      ? '#D42B30'
      : props.background == 'green'
      ? '#269D77'
      : props.background == 'blue'
      ? '#1E61A5'
      : props.background == 'brown'
      ? '#99633D'
      : props.background == 'purple'
      ? '#711970'
      : props.background == 'yellow'
      ? '#D2B356'
      : props.background == 'gray'
      ? '#87898C'
      : props.background == 'pink'
      ? '#DDB1B0'
      : props.background == 'white'
      ? '#f3f3f3'
      : props.background == 'black'
      ? '#323030'
      : '#874CE9'};

  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.background == 'white' ? '#DBDBDB' : 'transparent'};
  z-index: 10;
`;
export const Title = styled.Text`
  color: #e2e2e2;

  font-size: ${width * 0.07};
  font-weight: bold;
`;

export const ContainerOption = styled.View`
  background-color: white;
  width: ${width * 0.55};
  max-height: ${width * 1.2};
  display: flex;
  align-items: flex-start;

  border-radius: 10px;
`;
