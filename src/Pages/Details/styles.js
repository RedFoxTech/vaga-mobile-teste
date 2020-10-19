import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TextContainer = styled.View`
  padding: 20px;
  justify-content: center;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;

  line-height: 25px;
`;

export const TextValue = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const View = styled.ScrollView`
  flex: 1;
  background: #fff;
  border-radius: 10px;
  border: #000;
  margin: 20px 15px;
`;
