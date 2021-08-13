import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

import CardType from "../../components/CardType";

import { useRoute, useNavigation } from "@react-navigation/native";
import { formatPad } from "../../utils/number-utils";

import { IPokemonStats } from "../../models/IPokemon";

import styles from "./styles";

const DetailsPage = () => {
  const [pokemon, setPokemon] = useState<any>({});
  const [code, setCode] = useState("");
  const [stats, setStats] = useState<IPokemonStats | Object>({});
  const route: any = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    let pokemon = route.params?.pokemon ? route.params.pokemon : {};
    setPokemon(pokemon);
    setCode(
      pokemon?.url
        ? pokemon.url
            .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
            .split("/")[0]
        : "0"
    );
    setStats(pokemon.stats);
  }, []);

  return (
    <ScrollView style={styles.ScrollViewContainer}>
      <View style={styles.HeaderContainer}>
        <View style={styles.HeaderInfos}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/back.png")}
              style={styles.BackIcon}
            />
          </TouchableOpacity>

          <Text style={styles.HeaderInfosCode}>#{formatPad(code)}</Text>
        </View>
        <View style={styles.HeaderImageContainer}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${code}.png`,
            }}
            style={styles.HeaderImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.StatsContainer}>
        <Text style={styles.PokemonName}>{pokemon.name}</Text>

        <View style={styles.PokemonStats}>
          <FlatList
            data={pokemon.types}
            horizontal
            renderItem={({ item }) => {
              return <CardType type={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />

          <View style={styles.PokemonStatsInfosContainer}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#919191" }}
              >
                Height
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ddd" }}>
                {stats.height} M
              </Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#919191" }}
              >
                Weight
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ddd" }}>
                {stats.weight} KG
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "95%",
              marginTop: 32,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#919191" }}>HP</Text>
            <View
              style={{
                marginLeft: 20,
                width: "90%",
                height: 32,
                backgroundColor: "#f5f5f5",
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  elevation: 2,
                  alignSelf: "center",
                  top: 5,
                }}
              >
                {stats.hp}/300
              </Text>
              <View
                style={{
                  width: (stats.hp / 300) * 100 + "%",
                  backgroundColor: "#D53945",
                  height: 32,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: "95%",
              marginTop: 32,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#919191" }}>ATK</Text>
            <View
              style={{
                marginLeft: 20,

                width: "90%",
                height: 32,
                backgroundColor: "#f5f5f5",
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  elevation: 2,
                  alignSelf: "center",
                  top: 5,
                }}
              >
                {stats.attack}/300
              </Text>
              <View
                style={{
                  width: (stats.attack / 300) * 100 + "%",
                  backgroundColor: "#FFA52A",
                  height: 32,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: "95%",
              marginTop: 32,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#919191" }}>DEF</Text>
            <View
              style={{
                marginLeft: 20,

                width: "90%",
                height: 32,
                backgroundColor: "#f5f5f5",
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  elevation: 2,
                  alignSelf: "center",
                  top: 5,
                }}
              >
                {stats.defense}/300
              </Text>
              <View
                style={{
                  width: (stats.defense / 300) * 100 + "%",
                  backgroundColor: "#0192E5",
                  height: 32,
                  borderRadius: 16,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsPage;
