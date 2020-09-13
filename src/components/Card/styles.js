import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: white;
    border-radius: 10px;
    margin: 5px;
    padding-left: 10px;
    padding-bottom: 10px;
`; 

export const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image`
    width: 150px;
    height: 150px;
`;

export const Title = styled.Text`
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 20px;
`;

export const CardTypes = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;    
`;

export const Type = styled.Text`
    padding: 5px 10px;
    margin: 10px 10px 10px 0;
    border-radius: 5px;
    background: blue;
    color: #fff;  
`;

export const CardInfo = styled.View`
    margin-left: 10px; 
`;

export const CardData = styled.View`
    padding-bottom: 2px;
`;

export const CardTitle = styled.Text`
    font-weight: 700;
    margin-top: 5px;
`;

export const Info = styled.Text`
    margin: 0;
`;