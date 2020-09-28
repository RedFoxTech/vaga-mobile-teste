import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import colors from '../../global/styles/colors';
import { usePokemons } from '../../hooks/pokemons';

import api from '../../services/api';

import PageHeader, { FilterOptions } from '../../components/PageHeader';
import PokemonItem, { PokemonBasicProps } from '../../components/PokemonItem';

import { Container, EmptyView, EmptyText } from './styles';

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

interface TypeFilterResponse {
  pokemon: [
    {
      pokemon: {
        name: string;
      };
    },
  ];
}

const PokemonList: React.FC = () => {
  const { navigate } = useNavigation();

  const { favorites, toggleFavorite } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonBasicProps[]>([]);
  const [nextPage, setNextPage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [hasFiltersActive, setHasFiltersActive] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (pokemons.length > 0) {
        setPokemons(
          pokemons.map((poke) => ({
            ...poke,
            favorited: favorites.includes(poke.id),
          })),
        );
      }
    }, [favorites]),//eslint-disable-line
  );

  const loadPokemons = useCallback(
    async (firstLoad = true) => {
      if (firstLoad) {
        setLoading(true);
      } else {
        setFiltering(true);
      }
      try {
        const { data } = await api.get<PokemonsResponse>(
          '/pokemon?offset=0&limit=20',
        );

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
          favorited: favorites.includes(poke.id),
        }));

        const pageOffset = data.next.split('?')[1];

        setPokemons(pokemonsFormatted);
        setNextPage(pageOffset);
      } catch (err) {
        Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
      } finally {
        setLoading(false);
        setFiltering(false);
      }
    },
    [favorites],
  );

  useEffect(() => {
    if (!hasFiltersActive) {
      loadPokemons();
    }
  }, []);//eslint-disable-line

  const handleLoadMore = useCallback(async () => {
    if (!loading && nextPage) {
      try {
        const { data } = await api.get<PokemonsResponse>(
          `/pokemon?${nextPage}`,
        );

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
          favorited: favorites.includes(poke.id),
        }));

        const pageOffset = data.next.split('?')[1];

        setPokemons((prevState) => [...prevState, ...pokemonsFormatted]);
        setNextPage(pageOffset);
      } catch (err) {
        Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
      }
    }
  }, [favorites, loading, nextPage]);

  const handleFilterByName = useCallback(
    async (nameFilter: string) => {
      async function filterPokemons(nameFilter: string) {
        setFiltering(true);

        try {
          const response = await api.get<PokemonBasicResponse>(
            `pokemon/${nameFilter}`,
          );

          const { data } = response;

          const pokemonFormatted = {
            id: data.id,
            name: data.name,
            base_experience: data.base_experience,
            avatar: data.sprites.other['official-artwork'].front_default,
            types: data.types.map((dataType) => dataType.type.name),
            abilities: data.abilities.map(
              (pokeAbility) => pokeAbility.ability.name,
            ),
            favorited: favorites.includes(data.id),
          };

          setPokemons([pokemonFormatted]);
        } catch (err) {
          const Error: AxiosError = err;

          if (Error.response?.status === 404) {
            setPokemons([]);
          } else {
            Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
          }
        } finally {
          setFiltering(false);
        }
      }

      filterPokemons(nameFilter);
    },
    [favorites],
  );

  const handleFilterByType = useCallback(
    async (typeFilter: string) => {
      async function filterPokemons(typeFilter: string) {
        setFiltering(true);

        try {
          const { data } = await api.get<TypeFilterResponse>(
            `/type/${typeFilter}`,
          );

          const pokemonsDetailed = await Promise.all(
            data.pokemon.map(({ pokemon }) =>
              api
                .get<PokemonBasicResponse>(`/pokemon/${pokemon.name}`)
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
            favorited: favorites.includes(poke.id),
          }));

          setPokemons(pokemonsFormatted);
        } catch (err) {
          const Error: AxiosError = err;

          if (Error.response?.status === 404) {
            setPokemons([]);
          } else {
            Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
          }
        } finally {
          setFiltering(false);
        }
      }

      filterPokemons(typeFilter);
    },
    [favorites],
  );

  const handleClearFilters = useCallback(() => {
    setHasFiltersActive(false);

    loadPokemons(false);
  }, [loadPokemons]);

  const handleFiltersSubmit = useCallback(
    (filters: FilterOptions) => {
      setNextPage(undefined);
      setHasFiltersActive(true);

      if (filters.nameFilter) {
        handleFilterByName(filters.nameFilter.toLowerCase());
      } else if (filters.typeFilter) {
        handleFilterByType(filters.typeFilter.toLowerCase());
      }
    },
    [handleFilterByName, handleFilterByType],
  );

  const handleToggleFavorite = useCallback(
    (itemId: number) => {
      toggleFavorite(itemId);

      const updatedPokemons = pokemons.map((poke) =>
        poke.id === itemId ? { ...poke, favorited: !poke.favorited } : poke,
      );

      setPokemons(updatedPokemons);
    },
    [pokemons, toggleFavorite],
  );

  return (
    <Container>
      <PageHeader
        title="Pokédex"
        loading={filtering}
        filtersSubmit={(filters) => handleFiltersSubmit(filters)}
        clearFilters={handleClearFilters}
        onPressLeftButton={() => navigate('Landing')}
      />

      {(pokemons.length > 0 && (
        <FlatList
          style={{ marginTop: -40, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          data={pokemons}
          scrollEnabled
          onEndReachedThreshold={0.5}
          onEndReached={() => handleLoadMore()}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PokemonItem
              key={item.id}
              pokemon={item}
              toggleFavorite={() => handleToggleFavorite(item.id)}
            />
          )}
        />
      )) ||
        (loading && (
          <EmptyView style={{ justifyContent: 'center' }}>
            <ActivityIndicator
              animating={loading}
              size="large"
              color={colors.primaryVariant}
            />
          </EmptyView>
        )) || (
          <EmptyView>
            <EmptyText>
              Nenhum Pokémon encontrado com os filtros informados.
            </EmptyText>
          </EmptyView>
        )}
    </Container>
  );
};

export default PokemonList;
