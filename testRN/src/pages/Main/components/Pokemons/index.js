import React, {useContext, useState, useEffect} from 'react';

import {View, StyleSheet} from 'react-native';

import {Container, PokemonLis, ActivityIndicatorC} from './styles';

import Item from './components/Item/index';
import api from '~/services/api';

import SearchContext from '~/Context/Search/';

const Pokemons = () => {
  const {
    pokemons,
    pagination,

    namePokemon,
    refresh,
  } = useContext(SearchContext);

  const renderItem = ({item}) => {
    return (
      <Item
        name={item.name}
        img={item.img}
        habitat={item.habitat}
        type={item.types}
        id={item.id}
        color={item.color}
        experience={item.base_experience}
        weight={item.weight}
        height={item.height}
        stats={item.stats}
        evolution={item.evolution}
      />
    );
  };
  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicatorC
          style={styles.loading}
          size="large"
          color="#2f6eb5"
        />
      </View>
    );
  };

  async function loadMore() {
    await pagination();
  }

  return (
    <Container>
      <PokemonLis
        data={pokemons}
        refreshing={refresh}
        renderItem={renderItem}
        keyExtractor={(pokemons) => pokemons.id}
        onEndReachedThreshold={0.4}
        onEndReached={loadMore}
        ListFooterComponent={renderFooter}
        onRefresh={() => namePokemon()}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  loading: {
    color: 'red',
  },
});
export default Pokemons;
