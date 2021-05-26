import React from 'react';
import { Modal, Image, Alert, View, Button } from 'react-native'
import api from '../../services/api';
import BodyModel from '../BodyModel/BodyModel';
import { Container, TextName, Touch } from './PokeRender.styles'
export default function PokeRender({ data, openModal }) {
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
        <Container>
            <Touch onPress={() => {[openModal()]}}>
                <Image source={{ uri: urlImage }} style={{ width: 50, height: 50 }} />
                <TextName> {name} </TextName>
            </Touch>
                <Modal
                    animationType="slide"
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
        </Container>
    );
}