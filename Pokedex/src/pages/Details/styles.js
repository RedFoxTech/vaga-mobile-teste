import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #52B0FF;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.View`
  background-color: #fff;
  width: 80%;
  height: 70%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 65%;
  height: 50%;
  margin-bottom: 8px;
`;

export const TextDetail = styled.Text`
  color: #797979;
  font-size: 12px;
  margin-bottom: -4px;
`;

export const TextName = styled.Text`
  color: #52B0FF;
  font-size: 18px;
`;

export const InformationsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px 8px;
`;
