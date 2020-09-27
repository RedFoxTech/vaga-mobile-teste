import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { PokemonBasicProps } from '../components/PokemonItem';

interface FavoriteContextData {
  favorites: Array<PokemonBasicProps>;
  toggleFavorite(pokemon: PokemonBasicProps): void;
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData,
);

const FavoriteProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Array<PokemonBasicProps>>([]);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const favorites = await AsyncStorage.getItem('@Pokedex:favorites');

      if (favorites) {
        setData(JSON.parse(favorites));
      }
    }

    loadStoragedData();
  }, []);

  const toggleFavorite = useCallback(
    (pokemon: PokemonBasicProps) => {
      let newFavorites = data;

      const isFavorite = data.find((poke) => poke.id === pokemon.id);

      if (isFavorite) {
        newFavorites = data.filter((favorite) => favorite.id !== pokemon.id);
      } else {
        newFavorites.push({ ...pokemon, favorited: true });
      }

      AsyncStorage.setItem('@Pokedex:favorites', JSON.stringify(newFavorites));

      setData(newFavorites);
    },
    [data],
  );

  return (
    <FavoriteContext.Provider value={{ favorites: data, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  return context;
}

export { FavoriteProvider, useFavorite };
