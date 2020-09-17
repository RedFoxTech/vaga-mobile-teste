import React, {createContext, useState, useEffect} from 'react';
// import {Text} from 'react-native';
import {replace} from 'seamless-immutable';

const SearchContext = createContext({all: true});

import api from '~/services/api';

export const SearchProvider = ({children}) => {
  const [pokemons, setPokemons] = useState(['']);
  const [pageCount, setpageCount] = useState(0);
  const [filter, setFilter] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState(false);
  const [type, setType] = useState('');
  const [color, setColor] = useState('red');
  const [nameRoute, setNameRoute] = useState('');

  const fetchData = async () => {
    // You can await here
    setRefresh(true);

    if (filter != '') {
      setRefresh(false);
      const response = await api.get(
        `/pokemons?_page=${pageCount}&_limit=1&${nameRoute}=${filter}`,
      );

      setPokemons([...pokemons, ...response.data]);
      setName(false);
    }

    if (type == '' && filter == '') {
      setRefresh(false);
      const response = await api.get(`/pokemons?_page=${pageCount}&_limit=1`);
      setPokemons([...pokemons, ...response.data]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageCount, filter, type]);

  async function pagination() {
    setpageCount(pageCount + 1);
  }
  async function namePokemon(name, nameR) {
    setRefresh(true);
    setpageCount(1);
    setFilter(name);
    setNameRoute(nameR);
    setPokemons([]);
  }
  async function typePokemon(type) {}
  async function typePokemonClean() {
    setRefresh(true);
    setpageCount(1);
    setType('');
    setPokemons([]);
    setFilter('');
  }
  async function togleColor(color) {
    setColor(color);
  }

  return (
    <SearchContext.Provider
      value={{
        pokemons,
        namePokemon,
        pagination,
        pageCount,
        filter,
        refresh,
        typePokemon,
        setType,
        type,
        typePokemonClean,
        color,
        togleColor,
        nameRoute,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
