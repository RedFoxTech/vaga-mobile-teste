import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f5f5f5;
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
`;

export const StatContainer = styled.View`
  width: 100px;
  align-items: center;
  margin-top: 15px;
  border-radius: 10px;
  padding: 3px;
`;

export const StatContent = styled.View`
  min-height: 75px;
`;

export const StatContentBase = styled.View`
  flex: 1;
  align-items: center;
`;

export const StatText = styled.Text`
  text-transform: capitalize;
  color: #ffffff;
  font-weight: 700;
`;

export const StatBase = styled.Text`
  color: #ffffff;
  font-weight: 700;
  font-size: 25px;
  margin-top: 3px;
`;

export const TotalBaseText = styled.Text`
  color: #151e2b;
  font-weight: 700;
  font-size: 20px;
`;

export const TotalBaseContent = styled.View`
  align-self: flex-end;
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
  border-bottom-width: 4px;
  border-radius: 5px;
  padding: 3px;
  justify-content: space-between;
`;
