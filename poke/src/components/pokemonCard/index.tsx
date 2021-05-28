import React, {useEffect, useState} from 'react';
import {api_url} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../../styles/theme';
import {useFavorite} from '../../hooks/context';

import {
  CardAvatar,
  CardName,
  CardContainer,
  CardPokemon,
  TypeContent,
  TypeText,
  TextId,
  FavoriteIconView,
} from './styles';

interface PropsPokemon {
  pokeName: string;
  cardFavorite?: boolean;
}

interface PropsPokemonItem {
  name: string;
  id: string;
  sprites: [];
  types: [];
}

const Pokemon: React.FC<PropsPokemon> = ({pokeName, cardFavorite}) => {
  const [pokeItem, setPokeItem] = useState({} as PropsPokemonItem);
  const [background, setBackground] = useState('');

  const navigation = useNavigation();

  const {favourites} = useFavorite();

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(`${api_url}/${pokeName}`).then(data =>
        data.json(),
      );

      const {types} = response;
      let backgroundColor =
        types[0].type.name === 'normal' && types.length > 1
          ? Theme.background.type[types[1].type.name]
          : Theme.background.type[types[0].type.name];

      setBackground(backgroundColor);

      setPokeItem(response);
    };

    getPokemon();
  }, [pokeName]);

  return (
    <CardPokemon
      cardFavorite={cardFavorite}
      style={{
        backgroundColor: background && background,
      }}
      onPress={() =>
        navigation.navigate('PokemonDetails', {
          name: pokeName,
          background: background,
        })
      }>
      {String(pokeItem.id).length === 1 ? (
        <TextId cardFavorite={cardFavorite}>#0{pokeItem.id}</TextId>
      ) : (
        <TextId cardFavorite={cardFavorite}>#{pokeItem.id}</TextId>
      )}
      <CardContainer cardFavorite={cardFavorite}>
        <CardName cardFavorite={cardFavorite} numberOfLines={2}>
          {pokeItem.name}
        </CardName>
        {pokeItem.types && (
          <>
            {pokeItem.types.map((type, index) => (
              <TypeContent cardFavorite={cardFavorite} key={index}>
                <TypeText cardFavorite={cardFavorite}>
                  {type.type.name}
                </TypeText>
              </TypeContent>
            ))}
          </>
        )}
      </CardContainer>
      {pokeItem.sprites && (
        <CardAvatar
          cardFavorite={cardFavorite}
          source={{
            uri: pokeItem.sprites.other['official-artwork'].front_default,
          }}
        />
      )}
      {favourites.find(favourite => favourite.name === pokeName) &&
        !cardFavorite && (
          <FavoriteIconView cardFavorite={cardFavorite}>
            <Icon name="heart" size={25} color="#D04164" />
          </FavoriteIconView>
        )}
    </CardPokemon>
  );
};

export default Pokemon;
