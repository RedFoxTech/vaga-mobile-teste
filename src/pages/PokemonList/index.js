import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {Layout, Text, List, Card, Divider, Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

//import img from '../../assets/25.png';
import imgLogo from '../../assets/pokemonLogo.png';

import styles from './styles';
import api from '../../services/api';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState();

  const navigation = useNavigation();

  function navigateToDetail(name) {
    navigation.navigate('PokemonDetail', {name});
  }

  async function loadPokemons() {
    if (loading) {
      return;
    }

    if (total > 0 && pokemons.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`/pokemon/?limit=10&offset=${offset}`);

    const pokemonUrls = response.data.results;

    let pokemonList = [];
    for (const pokemon of pokemonUrls) {
      const pokemonInfo = await api.get(pokemon.url);
      pokemonList.push(pokemonInfo.data);
    }

    setPokemons([...pokemons, ...pokemonList]);
    setOffset(offset + 5);
    setTotal(total + offset);
    setLoading(false);
  }

  useEffect(() => {
    loadPokemons();
  }, []);
  return (
    <Layout style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={imgLogo} />
      </View>
      <List
        style={styles.list}
        ItemSeparatorComponent={Divider}
        data={pokemons}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.2}
        renderItem={({item, index}) => (
          <Card
            style={styles.card}
            header={() => (
              <Text style={styles.cardHeader}>{`${item.name}`}</Text>
            )}>
            <View style={styles.cardContent}>
              <Image
                style={styles.img}
                source={{uri: item.sprites.front_default}}
              />
              <Button
                status="danger"
                style={styles.button}
                onPress={() => navigateToDetail(item)}>
                Sobre
              </Button>
            </View>
          </Card>
        )}
      />
    </Layout>
  );
}
