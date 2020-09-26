import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native';
import PageHeader from '../../components/PageHeader';

import { Container } from './styles';
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
      <PageHeader title="Meus pokémons favoritos" />

      <FlatList
        style={{ marginTop: -40, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        data={favorites}
        scrollEnabled
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PokemonItem key={item.id} pokemon={item} favorited />
        )}
      />
    </Container>
  );
};

export default Favorites;
