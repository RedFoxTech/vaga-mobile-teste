import React from "react";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  Text
} from "react-native";
import { Header, SearchBar } from "react-native-elements";
import SinglePokemonScreen from "./SinglePokemonScreeen";
import Gif from "./Gif";
import { API } from "../services/api.js";
import { colors } from "../assets/utils/colors.js";
import SearchResult from "./SearchResult";

export default class HomeScreen extends React.Component {
  state = {
    pokemon: null,
    filtered: [],
    search: "",
    isModalVisible: false,
    busca: "Digite o nome do Pokemon...",
    display: "none",
    display2: "block"
  };
  componentDidMount() {
    this.findPokemon();
  }

  findPokemon() {
    const promises = [];
    for (let i = 1; i <= 200; i++) {
      const url = API + i;
      promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(results => {
      const pokemon = results.map(data => ({
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types.map(type => type.type.name).join(", "),
        height: data.height,
        weight: data.weight
      }));
      this.setState({ pokemon });
    });
  }

  updateSearch = search => {
    var filtered = [];
    if (search === "") {
      this.setState({ search, display: "none", display2: "block" });
    } else {
      this.state.pokemon.map(poke => {
        if (poke.name.startsWith(search)) {
          filtered.push(poke);
        } else {
          this.setState({ display: "none", display2: "block" });
        }
      });
      this.setState({ search, filtered, display: "block", display2: "none" });
    }
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleAlphabetically = () => {
    var pokemon = this.state.pokemon.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
    this.setState({ pokemon, display: "none", display2: "block" });
  };

  handleNumerically = () => {
    var pokemon = this.state.pokemon.sort((a, b) => (a.id > b.id ? 1 : -1));
    this.setState({ pokemon, display: "none", display2: "block" });
  };

  render() {
    const { search, busca } = this.state;
    return (
      <ImageBackground
        imageStyle={styles.opacity}
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <Header
          backgroundColor={colors.primary}
          leftComponent={{
            text: "Abc⇂",
            style: styles.leftComponent,
            onPress: this.handleAlphabetically
          }}
          centerComponent={{
            text: "My PokeApp",
            style: styles.centerComponent
          }}
          rightComponent={{
            text: "123⇂",
            style: styles.leftComponent,
            onPress: this.handleNumerically
          }}
        />
        <SearchBar
          placeholder={busca}
          onChangeText={this.updateSearch}
          value={search}
        />
        <ScrollView>
          <View style={{ display: this.state.display }}>
            {this.state.filtered.map((poke, i) => {
              return (
                <SearchResult
                  key={i}
                  image={poke.image}
                  toggleModal={this.toggleModal}
                  type={poke.type}
                  height={poke.height}
                  weight={poke.weight}
                  name={poke.name}
                  isVisible={this.state.isModalVisible}
                />
              );
            })}
          </View>
          <View style={{ display: this.state.display2 }}>
            {this.state.pokemon ? (
              this.state.pokemon.map((poke, i) => {
                return (
                  <SinglePokemonScreen
                    image={poke.image}
                    type={poke.type}
                    name={poke.name}
                    key={i}
                    height={poke.height}
                    weight={poke.weight}
                    openModal={this.openModal}
                  />
                );
              })
            ) : (
              <View style={styles.gif}>
                <Gif />
                <Text style={styles.text}>Loading...</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  gif: {
    paddingTop: 90,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  centerComponent: {
    color: colors.white,
    fontSize: 18
  },
  leftComponent: {
    color: colors.white,
    fontSize: 14,
    padding: 6
  },
  opacity: {
    opacity: 0.3
  },
  text: {
    fontSize: 13,
    color: colors.gray
  }
});
