import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(255, 220, 94, 0.9);
  position: relative;
`;

export const Header = styled.View`
  margin-top: 100px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Avatar = styled.Image`
  width: 130px;
  height: 130px;
`;

export const AvatarContent = styled.View`
  background-color: rgba(250, 250, 250, 0.5);
  width: 130px;
  height: 130px;
  border-radius: 75px;
  position: relative;
`;

export const ButtonChangeProfile = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  position: absolute;
  right: -10px;
  bottom: -10px;
  background-color: rgba(250, 250, 250, 0.7);
`;

export const IdUserView = styled.View``;

export const IdTextUser = styled.Text`
  font-size: 70px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
`;

export const FavoriteView = styled.View`
  margin-top: 30px;
  flex: 1;
`;

export const FavoriteText = styled.Text`
  color: #151e2b;
  font-size: 23px;
  font-weight: bold;
  padding: 0 20px;
`;
export const FavoriteContent = styled.View`
  background-color: #fff;
  flex: 1;
  margin-top: 20px;
  padding: 0 20px;
  padding-top: 30px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
  top: 40px;
  background-color: transparent;
`;
