import React, { useState, useCallback, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { BorderlessButton } from 'react-native-gesture-handler';

import colors from '../../global/styles/colors';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import PokemonItem, { PokemonBasicProps } from '../../components/PokemonItem';

import {
  Container,
  FilterButtonText,
  SearchForm,
  Label,
  InputGroup,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface PokemonsResponse {
  next: string;
  results: Array<{
    name: string;
  }>;
}

interface PokemonBasicResponse {
  id: number;
  name: string;
  base_experience: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
}

const PokemonList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonBasicProps[]>([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    async function loadPokemons() {
      try {
        const { data } = await api.get<PokemonsResponse>('/pokemon');

        const pokemonsDetailed = await Promise.all(
          data.results.map(({ name }) =>
            api
              .get<PokemonBasicResponse>(`/pokemon/${name}`)
              .then((resp) => resp.data),
          ),
        );

        const pokemonsFormatted = pokemonsDetailed.map((poke) => ({
          id: poke.id,
          name: poke.name,
          base_experience: poke.base_experience,
          avatar: poke.sprites.other['official-artwork'].front_default,
          types: poke.types.map((pokeType) => pokeType.type.name),
          abilities: poke.abilities.map(
            (pokeAbility) => pokeAbility.ability.name,
          ),
        }));

        setPokemons(pokemonsFormatted);
      } catch (err) {
        Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
      }
    }

    loadPokemons();
  }, []);

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('favorites');

    if (response) {
      const favoritesPokemons = JSON.parse(response);

      const favoritesPokemonsIds = favoritesPokemons.map(
        (pokemon: PokemonBasicProps) => pokemon.id,
      );
      setFavorites(favoritesPokemonsIds);
    }
  }, []);

  const handleFiltersSubmit = useCallback(async () => {
    loadFavorites();

    setFiltersVisible((prevState) => !prevState);

    const response = await api.get('');

    setPokemons(response.data);
  }, [loadFavorites]);

  const handleToggleFiltersVisible = useCallback(() => {
    setFiltersVisible((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <PageHeader
        title="Pokédex"
        headerRight={
          <BorderlessButton
            style={{ flexDirection: 'row' }}
            onPress={handleToggleFiltersVisible}
          >
            <FilterButtonText>Filtrar </FilterButtonText>
            <FeatherIcon
              name="filter"
              size={20}
              color={filtersVisible ? colors.red : '#fff'}
            />
          </BorderlessButton>
        }
      >
        {filtersVisible && (
          <SearchForm>
            <Label>Tipo</Label>
            <InputGroup>
              <Input selected="" />
              <Input selected="" />
            </InputGroup>

            <Button title="Filtrar" />
          </SearchForm>
        )}
      </PageHeader>

      <FlatList
        style={{ marginTop: -40, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        data={pokemons}
        scrollEnabled
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PokemonItem
            key={item.id}
            pokemon={item}
            favorited={favorites.includes(item.id)}
          />
        )}
      />
    </Container>
  );
};

export default PokemonList;
