import styled from 'styled-components/native';

export const Touch = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
justify-content: space-between;

border-width: 1px;
border-color: #000;
background-color: #FFF;
margin: 5px;
padding: 3px;
border-radius: 5px;
`;

export const TextName = styled.Text`
font-weight: bold;
text-transform: capitalize;
`;