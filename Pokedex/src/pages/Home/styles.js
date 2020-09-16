import styled from 'styled-components/native';

export const ContainerList = styled.FlatList`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #52b0ff;
`;

export const ContainerComponents = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

export const TextContainer = styled.View``;

export const TextId = styled.Text`
  color: #797979;
  font-size: 12px;
`;

export const TypeContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 101, 85, 0.8);
  border-radius: 16px;
  width: 60px;
  margin-right: 8px;
`;

export const TypesContainer = styled.FlatList`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
`;

export const TypeText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-bottom: 2px;
`;

export const ContainerButton = styled.TouchableHighlight`
  background-color: #e7e7e7;
  margin: 8px 16px;
  border-radius: 8px;
`;

export const Image = styled.Image`
  height: 90px;
  width: 90px;
`;

export const ButtonPage = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 40px;
  width: 140px;
  background-color: #fa6555;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 2% 5% 4% 5%;
  height: 100%;
`;

export const ContainerSearch = styled.View`
  flex-direction: row;
  background-color: transparent;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  height: 40px;
  width: 75%;
  border-width: 1px;
  border-color: #fa6555;
  color: #000;
  border-radius: 8px;
  padding-left: 10px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 70px;
  background-color: #fa6555;
  border-radius: 8px;
`;

export const ContainerTypesSearch = styled.View`
  flex-direction: row;
  background-color: transparent;
  height: 60px;
  justify-content: space-evenly;
  padding: 0px 20px;
  align-items: center;
  border-bottom-width: 0.3px;
  border-bottom-color: #fa6555;
`;

export const ButtonType = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 70px;
  background-color: transparent;
  border-radius: 8px;
`;

export const ContainerButtonType = styled.View`
  flex-direction: row;
  background-color: transparent;
  height: 40px;
  width: 90px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const TextNameType = styled.Text`
  margin-left: 8px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

export const TextNameTypeSearch = styled.Text`
  margin-left: 8%;
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
