import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #E74233;
`;
export const CenterView = styled.View`
flex: 1;
align-items: center
justify-content: center;
`;

export const Header = styled.View`
flex-direction: row;
align-items: center
justify-content: center;
padding: 5px;
margin-bottom: 20px;
width: 100%;
`;

export const Input = styled.TextInput`
border-width: 0.5px;
width: 80%;
border-top-left-radius: 5px;
border-color: #F2EDED;
background-color: #F2EDED;
color: #000;
`;

export const TextProps = styled.Text`
color: #000;
font-weight: bold;
margin: 5px;
text-transform: capitalize;
`;

export const CenterProps = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: #FFF;
border-radius: 5px;
margin: 5px;
width: 90%;
`;

export const SearchBtn = styled.TouchableOpacity`

`;