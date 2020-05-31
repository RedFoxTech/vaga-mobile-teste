import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { colors } from "../assets/utils/colors.js";

export default class PokemonModal extends React.Component {
  render() {
    const { name, image, type, height, weight } = this.props;
    return (
      <View>
        <View style={styles.button}>
          <TouchableOpacity onPress={this.props.toggleModal}>
            <Image
              source={require("../assets/images/exit.png")}
              style={styles.exitIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: image }}></Image>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>tipo: {type}</Text>
          <Text style={styles.text}>altura: {height}</Text>
          <Text style={styles.text}>peso: {weight}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 30
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  exitIcon: {
    width: 30,
    height: 30,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  image: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.white,
    fontSize: 18,
    margin: 0,
    textAlign: "center"
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  }
});
