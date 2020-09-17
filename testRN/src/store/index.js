import React, {useState, useEffect} from 'react';

import {createStore} from 'redux';

import api from '../services/api';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(['']);
  // const [result, setResult] = useState(['']);
  // const [page, SetPage] = useState(0);
  // const [stat, setStat] = useState(false);

  const fetchData = async () => {
    // You can await here

    const response = await api.get(`/pokemons?_page=${page}&_limit=3`);
    setPokemons([...pokemons, ...response.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return pokemons();
};

const Reducer = () => {
  return Pokemons;
};

const estore = createStore(Reducer);

export default estore;
