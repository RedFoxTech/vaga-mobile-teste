import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import CardType from "../../components/CardType";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProp } from "react-navigation-stack";

import { IPokemon } from "../../models/IPokemon";
import { formatPad } from "../../utils/number-utils";

import styles from "./styles";

const Card = (props: IPokemon) => {
  const navigation = useNavigation<NavigationStackProp>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("Details", {
          pokemon: props,
        })
      }
    >
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            props.url
              .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
              .split("/")[0]
          }.png`,
        }}
        resizeMode="contain"
        style={styles.cardImage}
      />
      <View style={styles.cardInfosContainer}>
        <Text style={styles.cardInfoName}>{props.name}</Text>
        <Text style={styles.cardInfoCode}>
          #
          {formatPad(
            props.url
              .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
              .split("/")[0]
          )}
        </Text>
        <FlatList
          data={props.types}
          horizontal
          renderItem={({ item }) => {
            return <CardType type={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
