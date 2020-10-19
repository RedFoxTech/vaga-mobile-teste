import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import api from '../../services/api';

import PokemonCard from '../../components/PokemonCard/index';

import {Container, List} from './styles';

const Dashboard = () => {
  const [limit, setLimit] = useState(0);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemons);

  async function loadPokemon(offSet = limit) {
    const response = await api.get(`pokemon?limit=20&offset=${offSet}`);
    dispatch({
      type: 'GET_POKEMONS',
      pokemons: [...pokemon, ...response.data.results],
    });
    setLimit(offSet + 20);
  }

  useEffect(() => {
    loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <List
        data={pokemon}
        onEndReached={() => loadPokemon()}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.url}
        renderItem={({item, index}) => (
          <PokemonCard
            key={index}
            data={item}
            onPress={() => navigation.navigate('Detalhes')}
          />
        )}
      />
    </Container>
  );
};

export default Dashboard;
