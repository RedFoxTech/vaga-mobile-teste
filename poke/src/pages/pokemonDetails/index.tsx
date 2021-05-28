/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {Animated, FlatList, ScrollView, View} from 'react-native';
import {api_url} from '../../services/api';

import Icon from 'react-native-vector-icons/FontAwesome';

import Pokeball from '../../assets/pokeball.svg';

import {
  Container,
  Header,
  TypeText,
  Title,
  ContentType,
  PokemonAvatar,
  HeaderContainer,
  TypeContainer,
  PokemonId,
  BackButton,
  FavoriteButton,
  PokeballView,
  Details,
  Text,
  ItemButton,
  ItemText,
  DetailsContainer,
  DetailsTitle,
  DetailsContent,
} from './styles';
import Abilities from '../../components/abilities';
import Moves from '../../components/moves';
import Stats from '../../components/stats';

import {useFavorite} from '../../hooks/context';

type ParamsList = {
  Params: {
    name: string;
    background: string;
  };
};

interface PropsPokemonItem {
  name: string;
  id: string;
  sprites: [];
  types: [];
  weight: number;
  height: number;
  abilities: [];
  moves: [];
  stats: [];
}

const items = [
  {
    id: 'abilities',
    name: 'Abilities',
  },
  {
    id: 'moves',
    name: 'Moves',
  },
  {
    id: 'stats',
    name: 'Stats',
  },
];

const PokemonDetails: React.FC = () => {
  const navigation = useNavigation();

  const {params} = useRoute<RouteProp<ParamsList, 'Params'>>();

  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_HEIGHT = 430;

  const {addFavourites, favourites, removeFavourites} = useFavorite();

  const [pokemon, setPokemon] = useState({} as PropsPokemonItem);
  const [active, setActive] = useState('abilities');

  const Height = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 70],
    extrapolate: 'clamp',
  });

  const getPokemon = useCallback(async () => {
    const response = await fetch(`${api_url}/${params.name}`).then(data =>
      data.json(),
    );
    setPokemon(response);
  }, [params.name]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <Container>
      <Animated.View style={{height: Height, position: 'relative'}}>
        <Header style={{backgroundColor: params.background}}>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon
              name="long-arrow-left"
              size={40}
              color=" rgba(255, 255, 255, 0.8)"
            />
          </BackButton>
          {String(pokemon.id).length === 1 ? (
            <PokemonId>#0{pokemon.id}</PokemonId>
          ) : (
            <PokemonId>#{pokemon.id}</PokemonId>
          )}
          <HeaderContainer>
            <Title>{pokemon.name}</Title>
            <TypeContainer>
              {pokemon.types && (
                <>
                  {pokemon.types.map((type, index) => (
                    <ContentType key={index}>
                      <TypeText>{type.type.name}</TypeText>
                    </ContentType>
                  ))}
                </>
              )}
            </TypeContainer>
            <Text>Height: {pokemon.height / 10}m</Text>
            <Text>Weight: {pokemon.weight / 10}kg</Text>
          </HeaderContainer>
          <PokeballView>
            <Pokeball />
          </PokeballView>
          {pokemon.sprites && (
            <PokemonAvatar
              source={{
                uri: pokemon.sprites.other['official-artwork'].front_default,
              }}
            />
          )}
          {favourites.find(favourite => favourite.id === pokemon.id) ? (
            <FavoriteButton onPress={() => removeFavourites(pokemon)}>
              <Icon
                name="heart"
                size={30}
                color="#D04164"
                style={{marginTop: 5}}
              />
            </FavoriteButton>
          ) : (
            <FavoriteButton onPress={() => addFavourites(pokemon)}>
              <Icon
                name="heart-o"
                size={30}
                color="#D04164"
                style={{marginTop: 5}}
              />
            </FavoriteButton>
          )}
        </Header>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {useNativeDriver: false},
        )}>
        <Details>
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={items}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="normal"
              bounces={false}
              renderItem={({item}) => (
                <ItemButton
                  onPress={() => setActive(item.id)}
                  style={{
                    borderBottomColor:
                      active === item.id ? params.background : '#f5f5f5',
                  }}>
                  <ItemText
                    style={{
                      color: active === item.id ? params.background : '#151e2b',
                    }}>
                    {item.name}
                  </ItemText>
                </ItemButton>
              )}
            />
          </View>
          <DetailsContainer>
            <DetailsTitle>{active}</DetailsTitle>
            <DetailsContent>
              {active === 'abilities' && (
                <Abilities
                  abilities={pokemon.abilities}
                  background={params.background}
                />
              )}
              {active === 'moves' && (
                <Moves moves={pokemon.moves} background={params.background} />
              )}
              {active === 'stats' && (
                <Stats stats={pokemon.stats} background={params.background} />
              )}
            </DetailsContent>
          </DetailsContainer>
        </Details>
      </ScrollView>
    </Container>
  );
};

export default PokemonDetails;
