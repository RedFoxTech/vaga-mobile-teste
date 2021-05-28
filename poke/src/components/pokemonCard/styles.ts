import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface PropsCard {
  cardFavorite?: boolean;
}

export const CardPokemon = styled(RectButton)<PropsCard>`
  height: 150px;
  width: ${props => (props.cardFavorite ? '100%' : '170px')};
  position: relative;
  border-radius: 15px;
  ${props =>
    props.cardFavorite &&
    css`
      margin-bottom: 15px;
    `}
`;

export const CardContainer = styled.View<PropsCard>`
  margin-top: 10px;
  margin-left: ${props => (props.cardFavorite ? '20px' : '10px')};
  width: 65%;
`;

export const CardName = styled.Text<PropsCard>`
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  font-size: ${props => (props.cardFavorite ? '25px' : '18px')};
`;

export const CardAvatar = styled.Image<PropsCard>`
  width: ${props => (props.cardFavorite ? '130px' : '100px')};
  height: ${props => (props.cardFavorite ? '130px' : '100px')};
  position: absolute;
  right: ${props => (props.cardFavorite ? '15px' : '0px')};
  bottom: ${props => (props.cardFavorite ? '-15px' : '0px')};
`;

export const TypeContent = styled.View<PropsCard>`
  background-color: red;
  margin-top: 5px;
  align-items: center;
  border-radius: 25px;
  width: ${props => (props.cardFavorite ? '90px' : '60px')};
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const TypeText = styled.Text<PropsCard>`
  color: #fff;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: ${props => (props.cardFavorite ? '12px' : '9px')};
`;

export const TextId = styled.Text<PropsCard>`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  right: ${props => (props.cardFavorite ? '20px' : '10px')};
  top: ${props => (props.cardFavorite ? '5px' : '20px')};
  font-size: ${props => (props.cardFavorite ? '30px' : '18px')};
  font-weight: bold;
`;

export const FavoriteIconView = styled.View<PropsCard>`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;
