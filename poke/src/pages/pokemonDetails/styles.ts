import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const HeaderContainer = styled.View`
  margin-top: 100px;
`;

export const Title = styled.Text`
  text-transform: capitalize;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ContentType = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100px;
  padding: 3px;
  border-radius: 15px;
  align-items: center;
  margin-right: 8px;
`;

export const TypeText = styled.Text`
  text-transform: capitalize;
  color: #fff;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 15px;
`;

export const Text = styled.Text`
  text-transform: capitalize;
  color: #fff;
  margin-top: 5px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const PokemonAvatar = styled.Image`
  width: 220px;
  height: 220px;
  position: absolute;
  bottom: -5px;
  right: 10px;
`;

export const PokemonId = styled.Text`
  position: absolute;
  right: 30px;
  top: 50px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 50px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 30px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  background-color: rgba(251, 248, 238, 0.6);
  position: absolute;
  bottom: 30px;
  left: 35px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const PokeballView = styled.View`
  position: absolute;
  right: 15px;
  bottom: 10px;
`;

export const Details = styled.View``;

export const ItemButton = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  width: 120px;
  margin-top: 20px;
  border-bottom-width: 3px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: #151e2b;
`;

export const DetailsContainer = styled.View`
  margin-top: 20px;
  padding: 0 30px;
`;

export const DetailsTitle = styled.Text`
  text-transform: capitalize;
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: #151e2b;
`;

export const DetailsContent = styled.View`
  margin-top: 5px;
`;
