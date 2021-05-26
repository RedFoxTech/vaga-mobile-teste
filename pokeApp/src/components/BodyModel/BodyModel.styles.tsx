import styled from 'styled-components/native';


export const Container = styled.View`
background-color: #FFF;
width: 320px;
height: 420px;
borderRadius: 5px;
border-width: 1px
border-color: #CCC;
`;

export const CenterView = styled.View`
align-items: center;
justify-content: center;

`;

export const TextDetails = styled.Text`

padding: 2px;
font-weight: bold;
text-transform: capitalize;
margin-bottom: 3px;

border-color: #999;
border-width: 1px;
border-radius: 5px;

text-align: center;
`;

export const TouchClose = styled.TouchableOpacity`
width: 100px;
margin-left: 5px;
margin-top: 5px;
`;

export const Header = styled.View`
width: 100%;
`;