import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput,} from 'react-native';
import styles from '../Styles/styles';

const Pokemons = props => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');

//Usado no lugar do componentDidMount()
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=964')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  return (
    <View>
      <View style={styles.searchCont}>
        <TextInput style={styles.searchPokemon} placeholder="Search Pokemons" onChangeText={value => setSearchPokemon(value)} value={searchPokemon}/>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())).map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.2}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      pokemon: pokemon.name
                    })
                  }>
                  <Image style={styles.imagemList} source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,}}/>
                  <Text style={styles.textList}>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;
