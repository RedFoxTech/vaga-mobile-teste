import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { ListItem } from "react-native-elements";
import PokemonModal from "./PokemonModal";

export default class SearchResult extends React.Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <View>
        <ListItem
          key={this.props.key}
          leftAvatar={{ source: { uri: this.props.image } }}
          title={this.props.name}
          subtitle={this.props.type}
          bottomDivider
          onPress={this.toggleModal}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <PokemonModal
            toggleModal={this.toggleModal}
            image={this.props.image}
            type={this.props.type}
            height={this.props.height}
            weight={this.props.weight}
            name={this.props.name}
          />
        </Modal>
      </View>
    );
  }
}
