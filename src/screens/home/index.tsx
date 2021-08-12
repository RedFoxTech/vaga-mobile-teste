import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import Card from "../../components/Card";

import { getPokemons, getPokemonInfos } from "../../services/pokemon-rest";
import { IPokemon } from "../../models/IPokemon";

import styles from "./styles";

const HomePage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(setTimeout(() => {}));

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    setIsLoading(true);
    let pokemonsFromApi = await getPokemons(offset);
    if (offset > 0) {
      setPokemons([...pokemons, ...pokemonsFromApi]);
    } else {
      setPokemons(pokemonsFromApi);
    }
    setOffset(offset + 20);
    setIsLoading(false);
  };

  const refreshPokemons = async () => {
    setisRefreshing(true);
    let pokemonsFromApi = await getPokemons(0);
    setPokemons(pokemonsFromApi);
    setOffset(20);
    setisRefreshing(false);
    setSearchText("");
  };

  const searchPokemon = async (pokemon_name: string) => {
    if (pokemon_name) {
      setIsLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

      let pokemonFromApi: IPokemon[] = [];
      pokemonFromApi[0] = await getPokemonInfos(url);

      setPokemons(pokemonFromApi);
      setOffset(0);
      setIsLoading(false);
    }
  };

  const _renderItem = (item: IPokemon) => (
    <Card
      name={item.name}
      url={item.url}
      types={item.types}
      moves={item.moves}
      abilities={item.abilities}
      stats={item.stats}
    />
  );

  const _renderListFooter = () => {
    if (isLoading) {
      return (
        <View style={styles.FooterContainer}>
          <Image
            source={{
              uri: "https://tenor.com/view/bulbasaur-rolling-pixel-gif-18356212.gif",
            }}
            style={styles.FooterLoadingGif}
          />
          <Text style={styles.FooterLoadingText}>Carregando...</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderTitle}>What Pokemon</Text>
        <Text style={styles.HeaderTitle}>are you looking for ?</Text>

        <View style={styles.HeaderSearchContainer}>
          <Image
            source={require("../../../assets/search.png")}
            style={styles.HeaderSearchIcon}
          />
          <TextInput
            placeholder="Search a pokemon by name or code"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);

              clearTimeout(searchTimeout);
              setSearchTimeout(
                setTimeout(() => {
                  searchPokemon(text);
                }, 1000)
              );
            }}
          />
        </View>
      </View>

      <FlatList
        style={styles.ListContainer}
        data={pokemons}
        renderItem={({ item }) => _renderItem(item)}
        ListFooterComponent={() => _renderListFooter()}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          if (!searchText) {
            loadPokemons();
          }
        }}
        onEndReachedThreshold={0.3}
        refreshing={isRefreshing}
        onRefresh={() => refreshPokemons()}
      />
    </View>
  );
};

export default HomePage;
