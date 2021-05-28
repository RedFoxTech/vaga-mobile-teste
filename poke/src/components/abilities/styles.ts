import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f5f5f5;
  padding-bottom: 30px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const AbilityContainer = styled.View`
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 25px;
  padding: 10px 20px;
  width: 95%;
  position: relative;
`;

export const AbilityName = styled.Text`
  text-transform: capitalize;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: #151e2b;
`;

export const AbilityText = styled.Text`
  color: #151e2b;
  font-size: 15px;
  font-weight: bold;
`;

export const PokeballView = styled.View`
  position: absolute;
  right: -15px;
  top: -15px;
`;
