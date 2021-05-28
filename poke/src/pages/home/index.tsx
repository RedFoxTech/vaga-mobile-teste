/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import {api_url, getPokemonList} from '../../services/api';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Avatar,
  Container,
  Header,
  ListContainer,
  SearchContainer,
  SearchInput,
  Title,
} from './styles';

import Pokemon from '../../components/pokemonCard';

interface PropsArrayPokemon {
  name: string;
  url: string;
  id: number;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PropsArrayPokemon[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loadNextPokemons, setLoadNextPokemons] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  const getDataPokemonList = useCallback(async () => {
    const pokemonList = await getPokemonList();
    setPokemons(pokemonList.results);
    setLoadNextPokemons(pokemonList.next);
  }, []);

  const loadMore = useCallback(async () => {
    setLoadingMore(true);
    const res = await fetch(loadNextPokemons).then(data => data.json());
    setLoadNextPokemons(res.next);
    setPokemons([...pokemons, ...res.results]);
  }, [loadNextPokemons, pokemons]);

  const searchPokemon = useCallback(async () => {
    if (searchText) {
      const response = await fetch(`${api_url}?limit=1118`).then(data =>
        data.json(),
      );

      const filtered = response.results.filter(({name}: PropsArrayPokemon) =>
        name.includes(searchText.toLocaleLowerCase()),
      );
      setPokemons(filtered);
    }
  }, [searchText]);

  useEffect(() => {
    if (searchText.length >= 1) {
      searchPokemon();
    }

    if (searchText.length === 0) {
      getDataPokemonList();
    }
  }, [searchText, searchPokemon, getDataPokemonList]);

  return (
    <Container>
      <Header>
        <Title numberOfLines={2}>What Pokemon are you looking for?</Title>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Avatar
            resizeMode="cover"
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            }}
          />
        </TouchableOpacity>
      </Header>
      <SearchContainer>
        <Icon name="search" size={25} color="#151e2b" />
        <SearchInput
          placeholder="Search Pokemon"
          placeholderTextColor="rgba(21, 30, 43,0.5)"
          underlineColorAndroid="transparent"
          selectionColor="#151e2b"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </SearchContainer>

      <ListContainer>
        <FlatList
          data={pokemons}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 5,
            paddingTop: 5,
          }}
          onEndReached={() => loadMore()}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color="#ffdc5e" size="large" />
            ) : (
              <></>
            )
          }
          renderItem={({item}) => {
            return <Pokemon pokeName={item.name} />;
          }}
        />
      </ListContainer>
    </Container>
  );
};

export default Home;
