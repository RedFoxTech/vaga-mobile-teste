import React from 'react'
import { View, Text, FlatList } from 'react-native'
import api from '../../services/api';

export default function AllPokemons() {
    const [pokemons, setPokemons] = React.useState([])

    React.useEffect(() => {
        async function loadData() {
            const response = await api.get('/pokemon?limit=100');
            setPokemons(response.data)

            console.log(response.data)
        }
        loadData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <Text>Teste</Text>
            <FlatList
                data={pokemons}
                keyExtractor={item => item.name}
                renderItem={PokemonShow}
            />
        </View>
    )
}

function PokemonShow(item) {


    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}
