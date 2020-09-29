import React, { useCallback, useEffect, useState } from 'react';

import { ActivityIndicator, Alert, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../../global/styles/colors';
import PageHeader, { FilterOptions } from '../../components/PageHeader';
import PokemonItem, { PokemonBasicProps } from '../../components/PokemonItem';
import { usePokemons } from '../../hooks/pokemons';
import { Container, EmptyView, EmptyText } from './styles';
import api from '../../services/api';

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

const Favorites: React.FC = () => {
  const { navigate } = useNavigation();

  const { favorites, toggleFavorite } = usePokemons();

  const [pokemons, setPokemons] = useState<PokemonBasicProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [hasFiltersActive, setHasFiltersActive] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadPokemons();
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
        const favoritesDetails = await Promise.all(
          favorites.map((favoriteId) =>
            api
              .get<PokemonBasicResponse>(`/pokemon/${favoriteId}`)
              .then((resp) => resp.data),
          ),
        );

        const pokemonsFormatted = favoritesDetails.map((poke) => ({
          id: poke.id,
          name: poke.name,
          base_experience: poke.base_experience,
          avatar: poke.sprites.other['official-artwork'].front_default,
          types: poke.types.map((pokeType) => pokeType.type.name),
          abilities: poke.abilities.map(
            (pokeAbility) => pokeAbility.ability.name,
          ),
          favorited: true,
        }));

        setPokemons(pokemonsFormatted);
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
  }, [hasFiltersActive]);//eslint-disable-line

  const handleFilterByName = useCallback(
    (nameFilter: string) => {
      const foundPokemon = pokemons.find(
        (pokemon) => pokemon.name === nameFilter,
      );
      if (foundPokemon) {
        setPokemons([foundPokemon]);
      } else {
        setPokemons([]);
      }
    },
    [pokemons],
  );

  const handleFilterByType = useCallback(
    (typeFilter: string) => {
      const foundPokemons = pokemons.filter((pokemon) =>
        pokemon.types.includes(typeFilter),
      );
      setPokemons(foundPokemons);
    },
    [pokemons],
  );

  const handleClearFilters = useCallback(() => {
    setHasFiltersActive(false);

    loadPokemons(false);
  }, [loadPokemons]);

  const handleFiltersSubmit = useCallback(
    (filters: FilterOptions) => {
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
    (itemId) => {
      toggleFavorite(itemId);

      const updatedPokemons = pokemons.filter(
        (pokemon) => pokemon.id !== itemId,
      );

      setPokemons(updatedPokemons);
    },
    [pokemons, toggleFavorite],
  );

  return (
    <Container>
      <PageHeader
        title="Meus pokémons favoritos"
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
        )) ||
        (favorites.length > 0 && (
          <EmptyView>
            <EmptyText>
              Nenhum Pokémon favorito encontrado com os filtros informados.
            </EmptyText>
          </EmptyView>
        )) || (
          <EmptyView>
            <EmptyText>
              Tente marcar algum Pokémon como favorito, clíque no ícone
              <MaterialIcon
                name="favorite-border"
                size={24}
                color={colors.primaryVariant}
              />
              próximo a XP BASE de um Pokémon para salvá-lo.
            </EmptyText>
          </EmptyView>
        )}
    </Container>
  );
};

export default Favorites;
