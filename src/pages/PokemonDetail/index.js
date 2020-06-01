import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {Layout, Text, Card, Button} from '@ui-kitten/components';
import {useNavigation, useRoute} from '@react-navigation/native';

//import img from '../../assets/25.png';
import imgLogo from '../../assets/pokemonLogo.png';

import styles from './styles';

export default function PokemonDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const pokemon = route.params.name;

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Layout style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={imgLogo} />
      </View>
      <Card
        style={styles.card}
        header={() => <Text style={styles.cardHeader}>{pokemon.name}</Text>}>
        <View style={styles.cardContent}>
          <Image
            style={styles.img}
            source={{uri: pokemon.sprites.front_default}}
          />
          <View>
            <Text style={styles.textTitle}>Tipo</Text>
            {pokemon.types.map((typeList) => (
              <Text>{typeList.type.name}</Text>
            ))}
            <Text style={styles.textTitle}>Habilidades</Text>
            {pokemon.abilities.map((abilityList) => (
              <Text>{abilityList.ability.name}</Text>
            ))}
          </View>
        </View>
      </Card>
      <Button
        status="danger"
        style={styles.button}
        onPress={() => navigateBack()}>
        Voltar
      </Button>
    </Layout>
  );
}
