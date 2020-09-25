import React, { useState, useCallback, useEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { BorderlessButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import PokemonItem, { PokemonProps } from '../../components/PokemonItem';

import {
  Container,
  FilterButtonText,
  SearchForm,
  Label,
  InputGroup,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface PokemonResponse {
  results: Array<{
    name: string;
    url: string;
  }>;
}

interface PokemonDetails {
  id: number;
  name: string;
  base_experience: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  location_area_encounters: string;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
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
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get<PokemonResponse>('/pokemon');

        const pokemonUrls = response.data.results.map((poke) => poke.url);

        const pokemonsDetailed = await Promise.all(
          pokemonUrls.map((url) =>
            api.get<PokemonDetails>(url).then((resp) => resp.data),
          ),
        );

        const pokemonsFormatted = pokemonsDetailed.map((poke) => ({
          id: poke.id,
          name: poke.name,
          base_experience: poke.base_experience,
          height: poke.height,
          weight: poke.weight,
          avatar: poke.sprites.other['official-artwork'].front_default,
          stats: poke.stats.map((pokeStat) => ({
            stat_name: pokeStat.stat.name,
            stat_power: pokeStat.base_stat,
          })),
          types: poke.types.map((pokeType) => pokeType.type.name),
          abilities: poke.abilities.map(
            (pokeAbility) => pokeAbility.ability.name,
          ),
          location_area_encounters: poke.location_area_encounters,
        }));

        setPokemons(pokemonsFormatted);
      } catch (err) {
        console.log(err);
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
        (pokemon: PokemonProps) => pokemon.id,
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
            <FeatherIcon name="filter" size={20} color="#fff" />
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

      <ScrollView
        style={{ marginTop: -40 }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        {pokemons.map((pokemon: PokemonProps) => (
          <PokemonItem
            key={pokemon.id}
            pokemon={pokemon}
            favorited={favorites.includes(pokemon.id)}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default PokemonList;
