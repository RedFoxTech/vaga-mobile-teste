import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px;
`;

export const Header = styled.View`
  margin-top: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: black;
  font-size: 22px;
  font-weight: bold;
  width: 220px;
  letter-spacing: 0.5px;
  color: #151e2b;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ffdc5e;
`;

export const SearchContainer = styled.View`
  margin-top: 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(220, 225, 234, 0.6);
  padding: 9px 13px;
  border-radius: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  padding: 0;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding-top: 20px;
`;
