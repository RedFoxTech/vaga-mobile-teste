import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';

import { Container, PokemonList } from './styles';
import PokemonItem, { PokemonProps } from '../../components/PokemonItem';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<PokemonProps[]>([]);

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('favorites');

    if (response) {
      setFavorites(JSON.parse(response));
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites]),
  );

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <PokemonList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 8,
        }}
      >
        {favorites.map((pokemon: PokemonProps) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} favorited />
        ))}
      </PokemonList>
    </Container>
  );
};

export default Favorites;
