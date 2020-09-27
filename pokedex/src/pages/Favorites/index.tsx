import React, { useCallback, useState } from 'react';

import { FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../global/styles/colors';
import PageHeader, { FilterOptions } from '../../components/PageHeader';
import PokemonItem from '../../components/PokemonItem';
import { useFavorite } from '../../hooks/favorite';
import { Container, EmptyView, EmptyText } from './styles';

const Favorites: React.FC = () => {
  const { navigate } = useNavigation();

  const { favorites, toggleFavorite } = useFavorite();

  const [pokemons, setPokemons] = useState(favorites);

  const handleFilterByName = useCallback(
    (nameFilter: string) => {
      const foundPokemon = favorites.find(
        (favorite) => favorite.name === nameFilter,
      );

      if (foundPokemon) {
        setPokemons([foundPokemon]);
      } else {
        setPokemons([]);
      }
    },
    [favorites],
  );

  const handleFilterByType = useCallback(
    (typeFilter) => {
      const foundPokemons = favorites.filter((favorite) =>
        favorite.types.includes(typeFilter),
      );

      setPokemons(foundPokemons);
    },
    [favorites],
  );

  const handleClearFilters = useCallback(() => {
    setPokemons(favorites);
  }, [favorites]);

  const handleFiltersSubmit = useCallback(
    (filters: FilterOptions) => {
      if (filters.nameFilter) {
        handleFilterByName(filters.nameFilter.toLowerCase());
      } else if (filters.typeFilter) {
        handleFilterByType(filters.typeFilter.toLowerCase());
      }
    },
    [handleFilterByName, handleFilterByType],
  );

  const handleToggleFavorite = useCallback(
    (item) => {
      toggleFavorite(item);

      setPokemons((prevState) =>
        prevState.filter((favorite) => favorite.id !== item.id),
      );
    },
    [toggleFavorite],
  );

  return (
    <Container>
      <PageHeader
        title="Meus pokémons favoritos"
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
              toggleFavorite={() => handleToggleFavorite(item)}
              favorited
            />
          )}
        />
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
