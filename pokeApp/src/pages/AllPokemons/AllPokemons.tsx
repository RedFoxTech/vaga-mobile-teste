import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

import { Container, Header, Title } from './AllPokemons.styles';

import PokeRender from '../../components/PokeRender/PokeRender';
import api from '../../services/api';

export default function AllPokemons() {
    const [pokemons, setPokemons] = React.useState<any[]>([])

    React.useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get('/pokemon?limit=100');


                setPokemons(response.data.results)

                // console.log(pokemons)
            } catch (error) {
                console.log(error)
            }
        }
        loadData();
    }, []);

    return (
        <Container>
            <Header>
                <Title>Pokemon</Title>
                <Image source={require('../../assets/img/pokebola.png')} style={{ width: 80, height: 80 }} />
            </Header>
            <FlatList
                data={pokemons}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <PokeRender data={item} />}
            />

        </Container>
    )
}


