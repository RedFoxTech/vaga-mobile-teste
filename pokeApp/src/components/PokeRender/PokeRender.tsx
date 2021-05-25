import React from 'react';
import { View, Text, Image, Alert } from 'react-native'
import { Container, TextName, Touch } from './PokeRender.styles'
export default function PokeRender({ data }) {
    const { name, url } = data
    const URL = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${URL}.png`

    return (
        <Container>
            <Touch onPress={() => {Alert.alert(data.url)}}>
                <Image source={{ uri: urlImage }} style={{ width: 50, height: 50 }} />
                <TextName> {name} </TextName>
            </Touch>
        </Container>
    );
}