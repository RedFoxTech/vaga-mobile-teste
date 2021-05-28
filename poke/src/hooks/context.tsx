import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface PropsContext {
  favourites: Array<PropsPokemonItem>;
  addFavourites: (item: PropsPokemonItem) => Promise<void>;
  removeFavourites: (item: PropsPokemonItem) => Promise<void>;
}

interface PropsPokemonItem {
  name: string;
  id: string;
  sprites: [];
  types: [];
}

const Context = createContext<PropsContext>({} as PropsContext);

export const Provider = ({children}) => {
  const [favourites, setFavourites] = useState<PropsPokemonItem[]>([]);

  useEffect(() => {
    async function dataStorage() {
      const res = await AsyncStorage.getItem('@Poke:Favourites');

      if (res) {
        setFavourites(JSON.parse(res));
      }
    }
    dataStorage();
  }, []);

  const addFavourites = async (item: PropsPokemonItem) => {
    if (favourites.find(favourite => favourite.id === item.id)) {
      return;
    }

    const newFavourite = [...favourites, item];
    setFavourites(newFavourite);
    await AsyncStorage.setItem(
      '@Poke:Favourites',
      JSON.stringify(newFavourite),
    );
  };

  const removeFavourites = async (item: PropsPokemonItem) => {
    const newFavourite = favourites.filter(
      favourite => favourite.id !== item.id,
    );
    setFavourites(newFavourite);
    await AsyncStorage.setItem(
      '@Poke:Favourites',
      JSON.stringify(newFavourite),
    );
  };

  return (
    <Context.Provider value={{favourites, addFavourites, removeFavourites}}>
      {children}
    </Context.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(Context);

  return context;
};
