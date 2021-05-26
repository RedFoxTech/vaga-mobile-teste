import React from 'react';
import { Modal, Image, Alert, View } from 'react-native';
import BodyModel from '../BodyModel/BodyModel';
import { TextName, Touch } from './PokeRender.styles';

export default function PokeRender({ data }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    

    const { name, url } = data
    const URL = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${URL}.png`

    function openModal(){
        setModalVisible(true)
    }

    function closeModal(){
      setModalVisible(false)
  }

    return (
            <Touch onPress={() => {[openModal()]}}>
                <Image source={{ uri: urlImage }} style={{ width: 50, height: 50 }} />
                <TextName> {name} </TextName>

                <Modal
                    animationType="fade"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                >
                  <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <BodyModel name={name} closed={() => closeModal()} />
                  </View> 
                </Modal>
            </Touch>
    );
}