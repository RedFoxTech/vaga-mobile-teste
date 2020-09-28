import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface PokemonsNamesResponse {
  results: [
    {
      name: string;
    },
  ];
}

interface PokemonsTypesResponse {
  results: [
    {
      name: string;
    },
  ];
}

interface PokemonsState {
  favorites: Array<number>;
  names: Array<string>;
  types: Array<string>;
}

interface PokemonsContextData {
  favorites: Array<number>;
  names: Array<string>;
  types: Array<string>;
  toggleFavorite(pokemonId: number): void;
}

const PokemonsContext = createContext<PokemonsContextData>(
  {} as PokemonsContextData,
);

const PokemonsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<PokemonsState>({
    favorites: [],
    names: [],
    types: [],
  } as PokemonsState);

  useEffect(() => {
    async function loadPokemonsNames() {
      const { data: pokemons } = await api.get<PokemonsNamesResponse>(
        '/pokemon/?offset=0&limit=2000',
      );

      const pokemonsNames = pokemons.results.map((pokemon) => pokemon.name);

      return pokemonsNames;
    }

    async function loadPokemonsTypes() {
      const { data: types } = await api.get<PokemonsTypesResponse>('/type');

      const pokemonsTypes = types.results.map((type) => type.name);

      return pokemonsTypes;
    }

    async function loadData() {
      const pokemons = await AsyncStorage.getItem('@Pokedex:pokemons');

      if (pokemons) {
        const loadedData = JSON.parse(pokemons);

        if (loadedData.names) {
          setData(loadedData);
        } else {
          const response = await Promise.all([
            loadPokemonsNames(),
            loadPokemonsTypes(),
          ]);

          setData({
            ...data,
            names: response[0],
            types: response[1],
          });

          await AsyncStorage.setItem(
            '@Pokedex:pokemons',
            JSON.stringify({
              ...data,
              names: response[0],
              types: response[1],
            }),
          );
        }
      }
    }

    if (data.names.length <= 0 || data.types.length <= 0) {
      loadData();
    }
  }, []);//eslint-disable-line

  const toggleFavorite = useCallback(
    async (pokemonId: number) => {
      let newFavorites = data.favorites;

      const isFavorite = data.favorites.find(
        (favoriteId) => favoriteId === pokemonId,
      );

      if (isFavorite) {
        newFavorites = data.favorites.filter(
          (favoriteId) => favoriteId !== pokemonId,
        );
      } else {
        newFavorites.push(pokemonId);
      }

      setData({ ...data, favorites: newFavorites });

      await AsyncStorage.setItem(
        '@Pokedex:pokemons',
        JSON.stringify({ ...data, favorites: newFavorites }),
      );
    },
    [data],
  );

  return (
    <PokemonsContext.Provider
      value={{
        ...data,
        toggleFavorite,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

function usePokemons(): PokemonsContextData {
  const context = useContext(PokemonsContext);

  return context;
}

export { PokemonsProvider, usePokemons };
