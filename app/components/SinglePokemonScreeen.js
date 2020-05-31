import React from "react";
import Modal from "react-native-modal";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import PokemonModal from "./PokemonModal";
import { colors } from "../assets/utils/colors.js";

export default class SinglePokemonScreen extends React.Component {
  state = {
    isModalVisible: false
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { name, image, type, height, weight } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleModal}>
          <Text style={styles.name}>{name}</Text>
          <Image style={styles.image} source={{ uri: image }}></Image>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <PokemonModal
            toggleModal={this.toggleModal}
            image={image}
            type={type}
            height={height}
            weight={weight}
            name={name}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 10
  },
  name: {
    color: colors.darkGray,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center"
  }
});
